package shared

type SandboxItemFireWebhookRequestWebhookCodeEnum string

const (
	SandboxItemFireWebhookRequestWebhookCodeEnumDefaultUpdate SandboxItemFireWebhookRequestWebhookCodeEnum = "DEFAULT_UPDATE"
)

type SandboxItemFireWebhookRequest struct {
	AccessToken string                                       `json:"access_token"`
	ClientID    *string                                      `json:"client_id"`
	Secret      *string                                      `json:"secret"`
	WebhookCode SandboxItemFireWebhookRequestWebhookCodeEnum `json:"webhook_code"`
}
