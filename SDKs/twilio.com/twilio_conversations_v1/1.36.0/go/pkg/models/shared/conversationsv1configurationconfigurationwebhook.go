package shared

type ConversationsV1ConfigurationConfigurationWebhook struct {
	AccountSid     *string                             `json:"account_sid,omitempty"`
	Filters        []string                            `json:"filters,omitempty"`
	Method         *ConfigurationWebhookEnumMethodEnum `json:"method,omitempty"`
	PostWebhookURL *string                             `json:"post_webhook_url,omitempty"`
	PreWebhookURL  *string                             `json:"pre_webhook_url,omitempty"`
	Target         *ConfigurationWebhookEnumTargetEnum `json:"target,omitempty"`
	URL            *string                             `json:"url,omitempty"`
}
