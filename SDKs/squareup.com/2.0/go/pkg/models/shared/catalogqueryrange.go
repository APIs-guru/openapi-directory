package shared



type CatalogQueryRange struct {
    AttributeMaxValue *int64 `json:"attribute_max_value,omitempty"`
    AttributeMinValue *int64 `json:"attribute_min_value,omitempty"`
    AttributeName string `json:"attribute_name"`
    
}

