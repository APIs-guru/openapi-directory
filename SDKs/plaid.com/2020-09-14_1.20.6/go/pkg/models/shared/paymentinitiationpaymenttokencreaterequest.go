package shared

type PaymentInitiationPaymentTokenCreateRequest struct {
	ClientID  *string `json:"client_id"`
	PaymentID string  `json:"payment_id"`
	Secret    *string `json:"secret"`
}
