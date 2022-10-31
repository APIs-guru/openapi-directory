package shared



type UpsertCatalogObjectRequest struct {
    IdempotencyKey string `json:"idempotency_key"`
    Object CatalogObject `json:"object"`
    
}

