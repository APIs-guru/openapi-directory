package shared

// PaymentInitiationRecipientCreateRequest
// PaymentInitiationRecipientCreateRequest defines the request schema for `/payment_initiation/recipient/create`
type PaymentInitiationRecipientCreateRequest struct {
	Address  map[string]interface{} `json:"address,omitempty"`
	Bacs     map[string]interface{} `json:"bacs,omitempty"`
	ClientID *string                `json:"client_id,omitempty"`
	Iban     *string                `json:"iban,omitempty"`
	Name     string                 `json:"name"`
	Secret   *string                `json:"secret,omitempty"`
}
