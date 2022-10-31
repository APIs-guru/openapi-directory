package shared

import (
	"time"
)

type ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook struct {
	AccountSid      *string      `json:"account_sid,omitempty"`
	ChatServiceSid  *string      `json:"chat_service_sid,omitempty"`
	Configuration   *interface{} `json:"configuration,omitempty"`
	ConversationSid *string      `json:"conversation_sid,omitempty"`
	DateCreated     *time.Time   `json:"date_created,omitempty"`
	DateUpdated     *time.Time   `json:"date_updated,omitempty"`
	Sid             *string      `json:"sid,omitempty"`
	Target          *string      `json:"target,omitempty"`
	URL             *string      `json:"url,omitempty"`
}
