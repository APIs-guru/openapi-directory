package shared

// PaymentInitiationRecipientListRequest
// PaymentInitiationRecipientListRequest defines the request schema for `/payment_initiation/recipient/list`
type PaymentInitiationRecipientListRequest struct {
	ClientID *string `json:"client_id,omitempty"`
	Secret   *string `json:"secret,omitempty"`
}
