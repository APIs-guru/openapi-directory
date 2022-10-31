package shared



type CreateCustomerGroupRequest struct {
    Group CustomerGroup `json:"group"`
    IdempotencyKey *string `json:"idempotency_key,omitempty"`
    
}

