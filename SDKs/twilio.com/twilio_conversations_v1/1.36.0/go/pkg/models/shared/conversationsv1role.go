package shared

import (
"time")

type ConversationsV1Role struct {
    AccountSid *string `json:"account_sid,omitempty"`
    ChatServiceSid *string `json:"chat_service_sid,omitempty"`
    DateCreated *time.Time `json:"date_created,omitempty"`
    DateUpdated *time.Time `json:"date_updated,omitempty"`
    FriendlyName *string `json:"friendly_name,omitempty"`
    Permissions []string `json:"permissions,omitempty"`
    Sid *string `json:"sid,omitempty"`
    Type *RoleEnumRoleTypeEnum `json:"type,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

