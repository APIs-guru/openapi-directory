package shared

type WebhookVerificationKeyGetRequest struct {
	ClientID *string `json:"client_id,omitempty"`
	KeyID    string  `json:"key_id"`
	Secret   *string `json:"secret,omitempty"`
}
