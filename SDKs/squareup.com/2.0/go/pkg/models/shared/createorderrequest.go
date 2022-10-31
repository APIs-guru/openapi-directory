package shared



type CreateOrderRequest struct {
    IdempotencyKey *string `json:"idempotency_key,omitempty"`
    Order *Order `json:"order,omitempty"`
    
}

