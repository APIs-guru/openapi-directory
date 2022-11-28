package shared

// SandboxBankTransferFireWebhookRequest
// SandboxBankTransferFireWebhookRequest defines the request schema for `/sandbox/bank_transfer/fire_webhook`
type SandboxBankTransferFireWebhookRequest struct {
	ClientID *string `json:"client_id,omitempty"`
	Secret   *string `json:"secret,omitempty"`
	Webhook  string  `json:"webhook"`
}
