package shared

type V1CreateRefundRequest struct {
	PaymentID             string   `json:"payment_id"`
	Reason                string   `json:"reason"`
	RefundedMoney         *V1Money `json:"refunded_money"`
	RequestIdempotenceKey *string  `json:"request_idempotence_key"`
	Type                  string   `json:"type"`
}
