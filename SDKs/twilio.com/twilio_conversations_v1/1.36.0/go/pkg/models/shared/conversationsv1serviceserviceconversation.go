package shared

import (
"time")

type ConversationsV1ServiceServiceConversation struct {
    AccountSid *string `json:"account_sid,omitempty"`
    Attributes *string `json:"attributes,omitempty"`
    Bindings *interface{} `json:"bindings,omitempty"`
    ChatServiceSid *string `json:"chat_service_sid,omitempty"`
    DateCreated *time.Time `json:"date_created,omitempty"`
    DateUpdated *time.Time `json:"date_updated,omitempty"`
    FriendlyName *string `json:"friendly_name,omitempty"`
    Links map[string]interface{} `json:"links,omitempty"`
    MessagingServiceSid *string `json:"messaging_service_sid,omitempty"`
    Sid *string `json:"sid,omitempty"`
    State *ServiceConversationEnumStateEnum `json:"state,omitempty"`
    Timers *interface{} `json:"timers,omitempty"`
    UniqueName *string `json:"unique_name,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

