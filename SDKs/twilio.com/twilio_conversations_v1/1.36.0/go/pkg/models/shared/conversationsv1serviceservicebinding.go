package shared

import (
"time")

type ConversationsV1ServiceServiceBinding struct {
    AccountSid *string `json:"account_sid,omitempty"`
    BindingType *ServiceBindingEnumBindingTypeEnum `json:"binding_type,omitempty"`
    ChatServiceSid *string `json:"chat_service_sid,omitempty"`
    CredentialSid *string `json:"credential_sid,omitempty"`
    DateCreated *time.Time `json:"date_created,omitempty"`
    DateUpdated *time.Time `json:"date_updated,omitempty"`
    Endpoint *string `json:"endpoint,omitempty"`
    Identity *string `json:"identity,omitempty"`
    MessageTypes []string `json:"message_types,omitempty"`
    Sid *string `json:"sid,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

