package shared



type ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration struct {
    AccountSid *string `json:"account_sid,omitempty"`
    ChatServiceSid *string `json:"chat_service_sid,omitempty"`
    Filters []string `json:"filters,omitempty"`
    Method *ServiceWebhookConfigurationEnumMethodEnum `json:"method,omitempty"`
    PostWebhookURL *string `json:"post_webhook_url,omitempty"`
    PreWebhookURL *string `json:"pre_webhook_url,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

