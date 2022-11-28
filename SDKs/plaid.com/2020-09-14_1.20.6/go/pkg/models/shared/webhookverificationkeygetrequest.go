package shared

// WebhookVerificationKeyGetRequest
// WebhookVerificationKeyGetRequest defines the request schema for `/webhook_verification_key/get`
type WebhookVerificationKeyGetRequest struct {
	ClientID *string `json:"client_id,omitempty"`
	KeyID    string  `json:"key_id"`
	Secret   *string `json:"secret,omitempty"`
}
