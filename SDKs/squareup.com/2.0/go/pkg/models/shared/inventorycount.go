package shared



type InventoryCount struct {
    CalculatedAt *string `json:"calculated_at,omitempty"`
    CatalogObjectID *string `json:"catalog_object_id,omitempty"`
    CatalogObjectType *string `json:"catalog_object_type,omitempty"`
    IsEstimated *bool `json:"is_estimated,omitempty"`
    LocationID *string `json:"location_id,omitempty"`
    Quantity *string `json:"quantity,omitempty"`
    State *string `json:"state,omitempty"`
    
}

