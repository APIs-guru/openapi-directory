package shared

type ConversationsV1ConfigurationConfigurationWebhook struct {
	AccountSid     *string                             `json:"account_sid"`
	Filters        []string                            `json:"filters"`
	Method         *ConfigurationWebhookEnumMethodEnum `json:"method"`
	PostWebhookURL *string                             `json:"post_webhook_url"`
	PreWebhookURL  *string                             `json:"pre_webhook_url"`
	Target         *ConfigurationWebhookEnumTargetEnum `json:"target"`
	URL            *string                             `json:"url"`
}
