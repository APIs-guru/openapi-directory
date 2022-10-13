package shared

type ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration struct {
	AccountSid     *string                                    `json:"account_sid"`
	ChatServiceSid *string                                    `json:"chat_service_sid"`
	Filters        []string                                   `json:"filters"`
	Method         *ServiceWebhookConfigurationEnumMethodEnum `json:"method"`
	PostWebhookURL *string                                    `json:"post_webhook_url"`
	PreWebhookURL  *string                                    `json:"pre_webhook_url"`
	URL            *string                                    `json:"url"`
}
