package shared

type SandboxBankTransferFireWebhookRequest struct {
	ClientID *string `json:"client_id"`
	Secret   *string `json:"secret"`
	Webhook  string  `json:"webhook"`
}
