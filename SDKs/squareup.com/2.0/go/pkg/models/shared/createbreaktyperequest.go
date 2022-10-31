package shared



type CreateBreakTypeRequest struct {
    BreakType BreakType `json:"break_type"`
    IdempotencyKey *string `json:"idempotency_key,omitempty"`
    
}

