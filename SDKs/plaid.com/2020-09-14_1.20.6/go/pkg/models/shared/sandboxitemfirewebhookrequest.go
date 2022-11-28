package shared

type SandboxItemFireWebhookRequestWebhookCodeEnum string

const (
	SandboxItemFireWebhookRequestWebhookCodeEnumDefaultUpdate SandboxItemFireWebhookRequestWebhookCodeEnum = "DEFAULT_UPDATE"
)

// SandboxItemFireWebhookRequest
// SandboxItemFireWebhookRequest defines the request schema for `/sandbox/item/fire_webhook`
type SandboxItemFireWebhookRequest struct {
	AccessToken string                                       `json:"access_token"`
	ClientID    *string                                      `json:"client_id,omitempty"`
	Secret      *string                                      `json:"secret,omitempty"`
	WebhookCode SandboxItemFireWebhookRequestWebhookCodeEnum `json:"webhook_code"`
}
