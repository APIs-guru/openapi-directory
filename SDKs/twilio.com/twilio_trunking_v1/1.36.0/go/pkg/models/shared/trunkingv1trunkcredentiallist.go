package shared

import (
"time")

type TrunkingV1TrunkCredentialList struct {
    AccountSid *string `json:"account_sid,omitempty"`
    DateCreated *time.Time `json:"date_created,omitempty"`
    DateUpdated *time.Time `json:"date_updated,omitempty"`
    FriendlyName *string `json:"friendly_name,omitempty"`
    Sid *string `json:"sid,omitempty"`
    TrunkSid *string `json:"trunk_sid,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

