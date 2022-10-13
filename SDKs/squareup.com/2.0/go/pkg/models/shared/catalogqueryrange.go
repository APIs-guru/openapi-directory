package shared

type CatalogQueryRange struct {
	AttributeMaxValue *int64 `json:"attribute_max_value"`
	AttributeMinValue *int64 `json:"attribute_min_value"`
	AttributeName     string `json:"attribute_name"`
}
