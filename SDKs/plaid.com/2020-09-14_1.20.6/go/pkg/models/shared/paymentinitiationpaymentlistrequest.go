package shared

// PaymentInitiationPaymentListRequest
// PaymentInitiationPaymentListRequest defines the request schema for `/payment_initiation/payment/list`
type PaymentInitiationPaymentListRequest struct {
	ClientID *string `json:"client_id,omitempty"`
	Count    *int64  `json:"count,omitempty"`
	Cursor   *string `json:"cursor,omitempty"`
	Secret   *string `json:"secret,omitempty"`
}
