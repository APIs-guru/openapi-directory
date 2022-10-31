package shared

import (
"time")

type ConversationsV1ConversationConversationParticipant struct {
    AccountSid *string `json:"account_sid,omitempty"`
    Attributes *string `json:"attributes,omitempty"`
    ConversationSid *string `json:"conversation_sid,omitempty"`
    DateCreated *time.Time `json:"date_created,omitempty"`
    DateUpdated *time.Time `json:"date_updated,omitempty"`
    Identity *string `json:"identity,omitempty"`
    LastReadMessageIndex *int64 `json:"last_read_message_index,omitempty"`
    LastReadTimestamp *string `json:"last_read_timestamp,omitempty"`
    MessagingBinding *interface{} `json:"messaging_binding,omitempty"`
    RoleSid *string `json:"role_sid,omitempty"`
    Sid *string `json:"sid,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

