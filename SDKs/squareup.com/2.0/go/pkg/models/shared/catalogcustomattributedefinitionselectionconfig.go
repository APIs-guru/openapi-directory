package shared



type CatalogCustomAttributeDefinitionSelectionConfig struct {
    AllowedSelections []CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection `json:"allowed_selections,omitempty"`
    MaxAllowedSelections *int64 `json:"max_allowed_selections,omitempty"`
    
}

