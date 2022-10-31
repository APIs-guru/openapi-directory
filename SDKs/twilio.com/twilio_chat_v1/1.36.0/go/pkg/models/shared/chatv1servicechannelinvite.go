package shared

import (
"time")

type ChatV1ServiceChannelInvite struct {
    AccountSid *string `json:"account_sid,omitempty"`
    ChannelSid *string `json:"channel_sid,omitempty"`
    CreatedBy *string `json:"created_by,omitempty"`
    DateCreated *time.Time `json:"date_created,omitempty"`
    DateUpdated *time.Time `json:"date_updated,omitempty"`
    Identity *string `json:"identity,omitempty"`
    RoleSid *string `json:"role_sid,omitempty"`
    ServiceSid *string `json:"service_sid,omitempty"`
    Sid *string `json:"sid,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

