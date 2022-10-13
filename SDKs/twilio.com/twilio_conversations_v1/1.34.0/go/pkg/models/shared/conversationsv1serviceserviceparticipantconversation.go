package shared

import (
	"time"
)

type ConversationsV1ServiceServiceParticipantConversation struct {
	AccountSid                  *string                                      `json:"account_sid"`
	ChatServiceSid              *string                                      `json:"chat_service_sid"`
	ConversationAttributes      *string                                      `json:"conversation_attributes"`
	ConversationCreatedBy       *string                                      `json:"conversation_created_by"`
	ConversationDateCreated     *time.Time                                   `json:"conversation_date_created"`
	ConversationDateUpdated     *time.Time                                   `json:"conversation_date_updated"`
	ConversationFriendlyName    *string                                      `json:"conversation_friendly_name"`
	ConversationSid             *string                                      `json:"conversation_sid"`
	ConversationState           *ServiceParticipantConversationEnumStateEnum `json:"conversation_state"`
	ConversationTimers          *interface{}                                 `json:"conversation_timers"`
	ConversationUniqueName      *string                                      `json:"conversation_unique_name"`
	Links                       map[string]interface{}                       `json:"links"`
	ParticipantIdentity         *string                                      `json:"participant_identity"`
	ParticipantMessagingBinding *interface{}                                 `json:"participant_messaging_binding"`
	ParticipantSid              *string                                      `json:"participant_sid"`
	ParticipantUserSid          *string                                      `json:"participant_user_sid"`
}
