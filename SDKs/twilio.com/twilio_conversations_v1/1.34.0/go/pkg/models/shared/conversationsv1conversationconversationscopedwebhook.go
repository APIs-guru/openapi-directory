package shared

import (
	"time"
)

type ConversationsV1ConversationConversationScopedWebhook struct {
	AccountSid      *string      `json:"account_sid"`
	Configuration   *interface{} `json:"configuration"`
	ConversationSid *string      `json:"conversation_sid"`
	DateCreated     *time.Time   `json:"date_created"`
	DateUpdated     *time.Time   `json:"date_updated"`
	Sid             *string      `json:"sid"`
	Target          *string      `json:"target"`
	URL             *string      `json:"url"`
}
