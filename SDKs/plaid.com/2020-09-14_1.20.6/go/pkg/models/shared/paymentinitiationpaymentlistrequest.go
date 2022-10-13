package shared

type PaymentInitiationPaymentListRequest struct {
	ClientID *string `json:"client_id"`
	Count    *int64  `json:"count"`
	Cursor   *string `json:"cursor"`
	Secret   *string `json:"secret"`
}
