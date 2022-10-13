package shared

type RefundPaymentRequest struct {
	AmountMoney    Money   `json:"amount_money"`
	AppFeeMoney    *Money  `json:"app_fee_money"`
	IdempotencyKey string  `json:"idempotency_key"`
	PaymentID      string  `json:"payment_id"`
	Reason         *string `json:"reason"`
}
