package shared

type CatalogCustomAttributeDefinitionSelectionConfig struct {
	AllowedSelections    []CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection `json:"allowed_selections"`
	MaxAllowedSelections *int64                                                                    `json:"max_allowed_selections"`
}
