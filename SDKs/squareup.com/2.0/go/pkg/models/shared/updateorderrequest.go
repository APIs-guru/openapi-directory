package shared

type UpdateOrderRequest struct {
	FieldsToClear  []string `json:"fields_to_clear"`
	IdempotencyKey *string  `json:"idempotency_key"`
	Order          *Order   `json:"order"`
}
