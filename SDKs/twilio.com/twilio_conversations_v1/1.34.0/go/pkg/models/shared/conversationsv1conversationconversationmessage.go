package shared

import (
	"time"
)

type ConversationsV1ConversationConversationMessage struct {
	AccountSid      *string                `json:"account_sid"`
	Attributes      *string                `json:"attributes"`
	Author          *string                `json:"author"`
	Body            *string                `json:"body"`
	ConversationSid *string                `json:"conversation_sid"`
	DateCreated     *time.Time             `json:"date_created"`
	DateUpdated     *time.Time             `json:"date_updated"`
	Delivery        *interface{}           `json:"delivery"`
	Index           *int64                 `json:"index"`
	Links           map[string]interface{} `json:"links"`
	Media           []interface{}          `json:"media"`
	ParticipantSid  *string                `json:"participant_sid"`
	Sid             *string                `json:"sid"`
	URL             *string                `json:"url"`
}
