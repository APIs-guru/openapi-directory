package shared

type PayOrderRequest struct {
	IdempotencyKey string   `json:"idempotency_key"`
	OrderVersion   *int64   `json:"order_version,omitempty"`
	PaymentIds     []string `json:"payment_ids,omitempty"`
}
