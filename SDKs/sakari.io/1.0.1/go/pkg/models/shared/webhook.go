package shared




type WebhookEventTypesEnum string

const (
    WebhookEventTypesEnumMessageReceived WebhookEventTypesEnum = "message-received"
WebhookEventTypesEnumMessageStatus WebhookEventTypesEnum = "message-status"
WebhookEventTypesEnumMessageSent WebhookEventTypesEnum = "message-sent"
WebhookEventTypesEnumConversationClosed WebhookEventTypesEnum = "conversation-closed"
WebhookEventTypesEnumContactCreated WebhookEventTypesEnum = "contact-created"
WebhookEventTypesEnumContactUpdated WebhookEventTypesEnum = "contact-updated"
WebhookEventTypesEnumContactRemoved WebhookEventTypesEnum = "contact-removed"
)


type Webhook struct {
    EventTypes []WebhookEventTypesEnum `json:"eventTypes,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

