package shared

type PaymentInitiationRecipientCreateRequest struct {
	Address  map[string]interface{} `json:"address"`
	Bacs     map[string]interface{} `json:"bacs"`
	ClientID *string                `json:"client_id"`
	Iban     *string                `json:"iban"`
	Name     string                 `json:"name"`
	Secret   *string                `json:"secret"`
}
