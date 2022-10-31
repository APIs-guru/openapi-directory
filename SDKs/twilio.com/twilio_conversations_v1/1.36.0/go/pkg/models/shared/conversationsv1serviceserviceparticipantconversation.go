package shared

import (
"time")

type ConversationsV1ServiceServiceParticipantConversation struct {
    AccountSid *string `json:"account_sid,omitempty"`
    ChatServiceSid *string `json:"chat_service_sid,omitempty"`
    ConversationAttributes *string `json:"conversation_attributes,omitempty"`
    ConversationCreatedBy *string `json:"conversation_created_by,omitempty"`
    ConversationDateCreated *time.Time `json:"conversation_date_created,omitempty"`
    ConversationDateUpdated *time.Time `json:"conversation_date_updated,omitempty"`
    ConversationFriendlyName *string `json:"conversation_friendly_name,omitempty"`
    ConversationSid *string `json:"conversation_sid,omitempty"`
    ConversationState *ServiceParticipantConversationEnumStateEnum `json:"conversation_state,omitempty"`
    ConversationTimers *interface{} `json:"conversation_timers,omitempty"`
    ConversationUniqueName *string `json:"conversation_unique_name,omitempty"`
    Links map[string]interface{} `json:"links,omitempty"`
    ParticipantIdentity *string `json:"participant_identity,omitempty"`
    ParticipantMessagingBinding *interface{} `json:"participant_messaging_binding,omitempty"`
    ParticipantSid *string `json:"participant_sid,omitempty"`
    ParticipantUserSid *string `json:"participant_user_sid,omitempty"`
    
}

