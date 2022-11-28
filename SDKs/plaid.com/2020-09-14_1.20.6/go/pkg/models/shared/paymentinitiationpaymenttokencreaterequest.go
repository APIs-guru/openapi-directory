package shared

// PaymentInitiationPaymentTokenCreateRequest
// PaymentInitiationPaymentTokenCreateRequest defines the request schema for `/payment_initiation/payment/token/create`
type PaymentInitiationPaymentTokenCreateRequest struct {
	ClientID  *string `json:"client_id,omitempty"`
	PaymentID string  `json:"payment_id"`
	Secret    *string `json:"secret,omitempty"`
}
