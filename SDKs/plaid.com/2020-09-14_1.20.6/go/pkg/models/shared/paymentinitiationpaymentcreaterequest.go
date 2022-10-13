package shared

type PaymentInitiationPaymentCreateRequest struct {
	Amount      map[string]interface{} `json:"amount"`
	ClientID    *string                `json:"client_id"`
	Options     map[string]interface{} `json:"options"`
	RecipientID string                 `json:"recipient_id"`
	Reference   string                 `json:"reference"`
	Schedule    map[string]interface{} `json:"schedule"`
	Secret      *string                `json:"secret"`
}
