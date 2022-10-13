package shared

type CatalogCustomAttributeDefinition struct {
	AllowedObjectTypes        []string                                         `json:"allowed_object_types"`
	AppVisibility             *string                                          `json:"app_visibility"`
	CustomAttributeUsageCount *int64                                           `json:"custom_attribute_usage_count"`
	Description               *string                                          `json:"description"`
	Key                       *string                                          `json:"key"`
	Name                      string                                           `json:"name"`
	NumberConfig              *CatalogCustomAttributeDefinitionNumberConfig    `json:"number_config"`
	SelectionConfig           *CatalogCustomAttributeDefinitionSelectionConfig `json:"selection_config"`
	SellerVisibility          *string                                          `json:"seller_visibility"`
	SourceApplication         *SourceApplication                               `json:"source_application"`
	StringConfig              *CatalogCustomAttributeDefinitionStringConfig    `json:"string_config"`
	Type                      string                                           `json:"type"`
}
