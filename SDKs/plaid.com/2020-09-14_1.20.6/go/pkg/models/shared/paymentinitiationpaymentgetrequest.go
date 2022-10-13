package shared

type PaymentInitiationPaymentGetRequest struct {
	ClientID  *string `json:"client_id"`
	PaymentID string  `json:"payment_id"`
	Secret    *string `json:"secret"`
}
