package utils

import (
	"fmt"
	"net/url"
	"reflect"
	"strings"
)

func populateForm(paramName string, explode bool, objType reflect.Type, objValue reflect.Value, getFieldName func(reflect.StructField) string) url.Values {
	formValues := url.Values{}

	if objType.Kind() == reflect.Pointer {
		if objValue.IsNil() {
			return formValues
		}
		objType = objType.Elem()
		objValue = objValue.Elem()
	}

	switch objType.Kind() {
	case reflect.Struct:
		items := []string{}

		for i := 0; i < objType.NumField(); i++ {
			fieldType := objType.Field(i)
			valType := objValue.Field(i)

			fieldName := getFieldName(fieldType)
			if fieldName == "" {
				continue
			}

			if explode {
				formValues.Add(fieldName, fmt.Sprintf("%v", valType.Interface()))
			} else {
				items = append(items, fmt.Sprintf("%s,%v", fieldName, valType.Interface()))
			}
		}

		if len(items) > 0 {
			formValues.Add(paramName, strings.Join(items, ","))
		}
	case reflect.Map:
		items := []string{}

		iter := objValue.MapRange()
		for iter.Next() {
			if explode {
				formValues.Add(iter.Key().String(), fmt.Sprintf("%v", iter.Value().Interface()))
			} else {
				items = append(items, fmt.Sprintf("%s,%v", iter.Key().String(), iter.Value().Interface()))
			}
		}

		if len(items) > 0 {
			formValues.Add(paramName, strings.Join(items, ","))
		}
	case reflect.Slice, reflect.Array:
		values := parseFormStyleArray(explode, objValue)
		for _, v := range values {
			formValues.Add(paramName, v)
		}
	default:
		formValues.Add(paramName, fmt.Sprintf("%v", objValue.Interface()))
	}

	return formValues
}

func parseFormStyleArray(explode bool, objValue reflect.Value) []string {
	values := []string{}
	items := []string{}

	for i := 0; i < objValue.Len(); i++ {
		if explode {
			values = append(values, fmt.Sprintf("%v", objValue.Index(i).Interface()))
		} else {
			items = append(items, fmt.Sprintf("%v", objValue.Index(i).Interface()))
		}
	}

	if len(items) > 0 {
		values = append(values, strings.Join(items, ","))
	}

	return values
}
