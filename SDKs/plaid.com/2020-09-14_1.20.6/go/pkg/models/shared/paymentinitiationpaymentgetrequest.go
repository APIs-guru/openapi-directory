package shared

// PaymentInitiationPaymentGetRequest
// PaymentInitiationPaymentGetRequest defines the request schema for `/payment_initiation/payment/get`
type PaymentInitiationPaymentGetRequest struct {
	ClientID  *string `json:"client_id,omitempty"`
	PaymentID string  `json:"payment_id"`
	Secret    *string `json:"secret,omitempty"`
}
