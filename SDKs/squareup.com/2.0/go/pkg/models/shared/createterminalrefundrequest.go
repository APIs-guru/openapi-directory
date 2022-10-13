package shared

type CreateTerminalRefundRequest struct {
	IdempotencyKey string          `json:"idempotency_key"`
	Refund         *TerminalRefund `json:"refund"`
}
