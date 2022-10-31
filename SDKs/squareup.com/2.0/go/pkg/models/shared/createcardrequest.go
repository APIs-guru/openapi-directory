package shared



type CreateCardRequest struct {
    Card Card `json:"card"`
    IdempotencyKey string `json:"idempotency_key"`
    SourceID string `json:"source_id"`
    VerificationToken *string `json:"verification_token,omitempty"`
    
}

