package shared

import (
"time")

type ConversationsV1ServiceServiceConversationServiceConversationMessage struct {
    AccountSid *string `json:"account_sid,omitempty"`
    Attributes *string `json:"attributes,omitempty"`
    Author *string `json:"author,omitempty"`
    Body *string `json:"body,omitempty"`
    ChatServiceSid *string `json:"chat_service_sid,omitempty"`
    ConversationSid *string `json:"conversation_sid,omitempty"`
    DateCreated *time.Time `json:"date_created,omitempty"`
    DateUpdated *time.Time `json:"date_updated,omitempty"`
    Delivery *interface{} `json:"delivery,omitempty"`
    Index *int64 `json:"index,omitempty"`
    Links map[string]interface{} `json:"links,omitempty"`
    Media []interface{} `json:"media,omitempty"`
    ParticipantSid *string `json:"participant_sid,omitempty"`
    Sid *string `json:"sid,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

