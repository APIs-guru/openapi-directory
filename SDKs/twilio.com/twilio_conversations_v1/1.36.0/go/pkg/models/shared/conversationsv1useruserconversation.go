package shared

import (
"time")

type ConversationsV1UserUserConversation struct {
    AccountSid *string `json:"account_sid,omitempty"`
    Attributes *string `json:"attributes,omitempty"`
    ChatServiceSid *string `json:"chat_service_sid,omitempty"`
    ConversationSid *string `json:"conversation_sid,omitempty"`
    ConversationState *UserConversationEnumStateEnum `json:"conversation_state,omitempty"`
    CreatedBy *string `json:"created_by,omitempty"`
    DateCreated *time.Time `json:"date_created,omitempty"`
    DateUpdated *time.Time `json:"date_updated,omitempty"`
    FriendlyName *string `json:"friendly_name,omitempty"`
    LastReadMessageIndex *int64 `json:"last_read_message_index,omitempty"`
    Links map[string]interface{} `json:"links,omitempty"`
    NotificationLevel *UserConversationEnumNotificationLevelEnum `json:"notification_level,omitempty"`
    ParticipantSid *string `json:"participant_sid,omitempty"`
    Timers *interface{} `json:"timers,omitempty"`
    UniqueName *string `json:"unique_name,omitempty"`
    UnreadMessagesCount *int64 `json:"unread_messages_count,omitempty"`
    URL *string `json:"url,omitempty"`
    UserSid *string `json:"user_sid,omitempty"`
    
}

