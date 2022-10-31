package shared



type BatchUpsertCatalogObjectsResponse struct {
    Errors []Error `json:"errors,omitempty"`
    IDMappings []CatalogIDMapping `json:"id_mappings,omitempty"`
    Objects []CatalogObject `json:"objects,omitempty"`
    UpdatedAt *string `json:"updated_at,omitempty"`
    
}

