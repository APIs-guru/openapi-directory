package shared

import (
	"time"
)

type ConversationsV1ServiceServiceConversationServiceConversationParticipant struct {
	AccountSid           *string      `json:"account_sid"`
	Attributes           *string      `json:"attributes"`
	ChatServiceSid       *string      `json:"chat_service_sid"`
	ConversationSid      *string      `json:"conversation_sid"`
	DateCreated          *time.Time   `json:"date_created"`
	DateUpdated          *time.Time   `json:"date_updated"`
	Identity             *string      `json:"identity"`
	LastReadMessageIndex *int64       `json:"last_read_message_index"`
	LastReadTimestamp    *string      `json:"last_read_timestamp"`
	MessagingBinding     *interface{} `json:"messaging_binding"`
	RoleSid              *string      `json:"role_sid"`
	Sid                  *string      `json:"sid"`
	URL                  *string      `json:"url"`
}
