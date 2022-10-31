package shared



type CatalogObjectReference struct {
    CatalogVersion *int64 `json:"catalog_version,omitempty"`
    ObjectID *string `json:"object_id,omitempty"`
    
}

