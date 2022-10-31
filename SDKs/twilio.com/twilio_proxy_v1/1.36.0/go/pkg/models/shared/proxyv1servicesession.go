package shared

import (
"time")

type ProxyV1ServiceSession struct {
    AccountSid *string `json:"account_sid,omitempty"`
    ClosedReason *string `json:"closed_reason,omitempty"`
    DateCreated *time.Time `json:"date_created,omitempty"`
    DateEnded *time.Time `json:"date_ended,omitempty"`
    DateExpiry *time.Time `json:"date_expiry,omitempty"`
    DateLastInteraction *time.Time `json:"date_last_interaction,omitempty"`
    DateStarted *time.Time `json:"date_started,omitempty"`
    DateUpdated *time.Time `json:"date_updated,omitempty"`
    Links map[string]interface{} `json:"links,omitempty"`
    Mode *SessionEnumModeEnum `json:"mode,omitempty"`
    ServiceSid *string `json:"service_sid,omitempty"`
    Sid *string `json:"sid,omitempty"`
    Status *SessionEnumStatusEnum `json:"status,omitempty"`
    TTL *int64 `json:"ttl,omitempty"`
    UniqueName *string `json:"unique_name,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

