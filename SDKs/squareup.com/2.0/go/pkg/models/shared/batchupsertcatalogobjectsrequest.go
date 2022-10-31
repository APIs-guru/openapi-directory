package shared



type BatchUpsertCatalogObjectsRequest struct {
    Batches []CatalogObjectBatch `json:"batches"`
    IdempotencyKey string `json:"idempotency_key"`
    
}

