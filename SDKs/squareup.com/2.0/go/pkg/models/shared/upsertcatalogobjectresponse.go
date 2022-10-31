package shared



type UpsertCatalogObjectResponse struct {
    CatalogObject *CatalogObject `json:"catalog_object,omitempty"`
    Errors []Error `json:"errors,omitempty"`
    IDMappings []CatalogIDMapping `json:"id_mappings,omitempty"`
    
}

