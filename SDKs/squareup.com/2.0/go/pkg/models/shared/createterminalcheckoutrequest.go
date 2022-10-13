package shared

type CreateTerminalCheckoutRequest struct {
	Checkout       TerminalCheckout `json:"checkout"`
	IdempotencyKey string           `json:"idempotency_key"`
}
