package shared

type V1CreateRefundRequest struct {
	PaymentID             string   `json:"payment_id"`
	Reason                string   `json:"reason"`
	RefundedMoney         *V1Money `json:"refunded_money,omitempty"`
	RequestIdempotenceKey *string  `json:"request_idempotence_key,omitempty"`
	Type                  string   `json:"type"`
}
