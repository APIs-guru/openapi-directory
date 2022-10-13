package shared

type UpdatePaymentRequest struct {
	IdempotencyKey string   `json:"idempotency_key"`
	Payment        *Payment `json:"payment"`
}
