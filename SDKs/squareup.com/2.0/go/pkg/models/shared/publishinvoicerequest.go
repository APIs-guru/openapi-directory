package shared



type PublishInvoiceRequest struct {
    IdempotencyKey *string `json:"idempotency_key,omitempty"`
    Version int64 `json:"version"`
    
}

