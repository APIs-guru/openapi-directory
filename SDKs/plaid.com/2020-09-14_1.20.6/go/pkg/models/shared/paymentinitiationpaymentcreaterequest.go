package shared

// PaymentInitiationPaymentCreateRequest
// PaymentInitiationPaymentCreateRequest defines the request schema for `/payment_initiation/payment/create`
type PaymentInitiationPaymentCreateRequest struct {
	Amount      map[string]interface{} `json:"amount"`
	ClientID    *string                `json:"client_id,omitempty"`
	Options     map[string]interface{} `json:"options,omitempty"`
	RecipientID string                 `json:"recipient_id"`
	Reference   string                 `json:"reference"`
	Schedule    map[string]interface{} `json:"schedule,omitempty"`
	Secret      *string                `json:"secret,omitempty"`
}
