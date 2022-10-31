package shared

type SandboxBankTransferFireWebhookRequest struct {
	ClientID *string `json:"client_id,omitempty"`
	Secret   *string `json:"secret,omitempty"`
	Webhook  string  `json:"webhook"`
}
