package shared

import (
"time")

type TrunkingV1TrunkOriginationURL struct {
    AccountSid *string `json:"account_sid,omitempty"`
    DateCreated *time.Time `json:"date_created,omitempty"`
    DateUpdated *time.Time `json:"date_updated,omitempty"`
    Enabled *bool `json:"enabled,omitempty"`
    FriendlyName *string `json:"friendly_name,omitempty"`
    Priority *int64 `json:"priority,omitempty"`
    Sid *string `json:"sid,omitempty"`
    SipURL *string `json:"sip_url,omitempty"`
    TrunkSid *string `json:"trunk_sid,omitempty"`
    URL *string `json:"url,omitempty"`
    Weight *int64 `json:"weight,omitempty"`
    
}

