package shared

import (
"time")

type PreviewWirelessRatePlan struct {
    AccountSid *string `json:"account_sid,omitempty"`
    DataEnabled *bool `json:"data_enabled,omitempty"`
    DataLimit *int64 `json:"data_limit,omitempty"`
    DataMetering *string `json:"data_metering,omitempty"`
    DateCreated *time.Time `json:"date_created,omitempty"`
    DateUpdated *time.Time `json:"date_updated,omitempty"`
    FriendlyName *string `json:"friendly_name,omitempty"`
    InternationalRoaming []string `json:"international_roaming,omitempty"`
    MessagingEnabled *bool `json:"messaging_enabled,omitempty"`
    NationalRoamingEnabled *bool `json:"national_roaming_enabled,omitempty"`
    Sid *string `json:"sid,omitempty"`
    UniqueName *string `json:"unique_name,omitempty"`
    URL *string `json:"url,omitempty"`
    VoiceEnabled *bool `json:"voice_enabled,omitempty"`
    
}

