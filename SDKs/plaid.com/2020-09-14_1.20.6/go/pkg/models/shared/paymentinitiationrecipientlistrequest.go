package shared

type PaymentInitiationRecipientListRequest struct {
	ClientID *string `json:"client_id"`
	Secret   *string `json:"secret"`
}
