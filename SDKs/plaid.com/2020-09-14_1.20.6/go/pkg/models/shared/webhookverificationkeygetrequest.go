package shared

type WebhookVerificationKeyGetRequest struct {
	ClientID *string `json:"client_id"`
	KeyID    string  `json:"key_id"`
	Secret   *string `json:"secret"`
}
