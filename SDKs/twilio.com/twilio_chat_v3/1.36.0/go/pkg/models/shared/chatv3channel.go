package shared

import (
"time")

type ChatV3Channel struct {
    AccountSid *string `json:"account_sid,omitempty"`
    Attributes *string `json:"attributes,omitempty"`
    CreatedBy *string `json:"created_by,omitempty"`
    DateCreated *time.Time `json:"date_created,omitempty"`
    DateUpdated *time.Time `json:"date_updated,omitempty"`
    FriendlyName *string `json:"friendly_name,omitempty"`
    MembersCount *int64 `json:"members_count,omitempty"`
    MessagesCount *int64 `json:"messages_count,omitempty"`
    MessagingServiceSid *string `json:"messaging_service_sid,omitempty"`
    ServiceSid *string `json:"service_sid,omitempty"`
    Sid *string `json:"sid,omitempty"`
    Type *ChannelEnumChannelTypeEnum `json:"type,omitempty"`
    UniqueName *string `json:"unique_name,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

