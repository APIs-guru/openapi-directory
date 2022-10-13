package shared

import (
	"time"
)

type ConversationsV1UserUserConversation struct {
	AccountSid           *string                                    `json:"account_sid"`
	Attributes           *string                                    `json:"attributes"`
	ChatServiceSid       *string                                    `json:"chat_service_sid"`
	ConversationSid      *string                                    `json:"conversation_sid"`
	ConversationState    *UserConversationEnumStateEnum             `json:"conversation_state"`
	CreatedBy            *string                                    `json:"created_by"`
	DateCreated          *time.Time                                 `json:"date_created"`
	DateUpdated          *time.Time                                 `json:"date_updated"`
	FriendlyName         *string                                    `json:"friendly_name"`
	LastReadMessageIndex *int64                                     `json:"last_read_message_index"`
	Links                map[string]interface{}                     `json:"links"`
	NotificationLevel    *UserConversationEnumNotificationLevelEnum `json:"notification_level"`
	ParticipantSid       *string                                    `json:"participant_sid"`
	Timers               *interface{}                               `json:"timers"`
	UniqueName           *string                                    `json:"unique_name"`
	UnreadMessagesCount  *int64                                     `json:"unread_messages_count"`
	URL                  *string                                    `json:"url"`
	UserSid              *string                                    `json:"user_sid"`
}
