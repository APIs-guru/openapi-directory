package shared



type CancelPaymentByIdempotencyKeyRequest struct {
    IdempotencyKey string `json:"idempotency_key"`
    
}

