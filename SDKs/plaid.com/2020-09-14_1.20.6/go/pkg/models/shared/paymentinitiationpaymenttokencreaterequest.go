package shared

type PaymentInitiationPaymentTokenCreateRequest struct {
	ClientID  *string `json:"client_id,omitempty"`
	PaymentID string  `json:"payment_id"`
	Secret    *string `json:"secret,omitempty"`
}
