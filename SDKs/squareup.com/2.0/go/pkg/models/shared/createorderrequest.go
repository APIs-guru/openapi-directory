package shared

type CreateOrderRequest struct {
	IdempotencyKey *string `json:"idempotency_key"`
	Order          *Order  `json:"order"`
}
