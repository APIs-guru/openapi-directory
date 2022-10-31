package shared

import (
"time")

type IPMessagingV1ServiceRole struct {
    AccountSid *string `json:"account_sid,omitempty"`
    DateCreated *time.Time `json:"date_created,omitempty"`
    DateUpdated *time.Time `json:"date_updated,omitempty"`
    FriendlyName *string `json:"friendly_name,omitempty"`
    Permissions []string `json:"permissions,omitempty"`
    ServiceSid *string `json:"service_sid,omitempty"`
    Sid *string `json:"sid,omitempty"`
    Type *RoleEnumRoleTypeEnum `json:"type,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

