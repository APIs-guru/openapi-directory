package shared



type UpdateOrderRequest struct {
    FieldsToClear []string `json:"fields_to_clear,omitempty"`
    IdempotencyKey *string `json:"idempotency_key,omitempty"`
    Order *Order `json:"order,omitempty"`
    
}

