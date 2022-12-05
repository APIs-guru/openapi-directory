package utils

import (
	"context"
	"fmt"
	"net/http"
	"reflect"
	"strings"
)

func PopulateHeaders(ctx context.Context, req *http.Request, headers interface{}) {
	headerParamsStructType := reflect.TypeOf(headers)
	headerParamsValType := reflect.ValueOf(headers)

	for i := 0; i < headerParamsStructType.NumField(); i++ {
		fieldType := headerParamsStructType.Field(i)
		valType := headerParamsValType.Field(i)

		tag := parseParamTag(headerParamTagKey, fieldType, "simple", false)
		if tag == nil {
			continue
		}

		value := serializeHeader(fieldType.Type, valType, tag.Explode)
		if value != "" {
			req.Header.Add(tag.ParamName, value)
		}
	}
}

func serializeHeader(objType reflect.Type, objValue reflect.Value, explode bool) string {
	if objType.Kind() == reflect.Pointer {
		if objValue.IsNil() {
			return ""
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

			tag := parseParamTag(headerParamTagKey, fieldType, "simple", false)
			if tag == nil {
				continue
			}

			fieldName := tag.ParamName

			if fieldName == "" {
				continue
			}

			if explode {
				items = append(items, fmt.Sprintf("%s=%v", fieldName, valType.Interface()))
			} else {
				items = append(items, fieldName, fmt.Sprintf("%v", valType.Interface()))
			}
		}

		return strings.Join(items, ",")
	case reflect.Map:
		items := []string{}

		iter := objValue.MapRange()
		for iter.Next() {
			if explode {
				items = append(items, fmt.Sprintf("%s=%v", iter.Key().String(), iter.Value().Interface()))
			} else {
				items = append(items, iter.Key().String(), fmt.Sprintf("%v", iter.Value().Interface()))
			}
		}

		return strings.Join(items, ",")
	case reflect.Slice, reflect.Array:
		items := []string{}

		for i := 0; i < objValue.Len(); i++ {
			items = append(items, fmt.Sprintf("%v", objValue.Index(i).Interface()))
		}

		return strings.Join(items, ",")
	default:
		return fmt.Sprintf("%v", objValue.Interface())
	}
}
