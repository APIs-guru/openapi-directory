package shared

import (
	"time"
)

type ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook struct {
	AccountSid      *string      `json:"account_sid"`
	ChatServiceSid  *string      `json:"chat_service_sid"`
	Configuration   *interface{} `json:"configuration"`
	ConversationSid *string      `json:"conversation_sid"`
	DateCreated     *time.Time   `json:"date_created"`
	DateUpdated     *time.Time   `json:"date_updated"`
	Sid             *string      `json:"sid"`
	Target          *string      `json:"target"`
	URL             *string      `json:"url"`
}
