package shared

import (
"time")

type TrusthubV1TrustProduct struct {
    AccountSid *string `json:"account_sid,omitempty"`
    DateCreated *time.Time `json:"date_created,omitempty"`
    DateUpdated *time.Time `json:"date_updated,omitempty"`
    Email *string `json:"email,omitempty"`
    FriendlyName *string `json:"friendly_name,omitempty"`
    Links map[string]interface{} `json:"links,omitempty"`
    PolicySid *string `json:"policy_sid,omitempty"`
    Sid *string `json:"sid,omitempty"`
    Status *TrustProductEnumStatusEnum `json:"status,omitempty"`
    StatusCallback *string `json:"status_callback,omitempty"`
    URL *string `json:"url,omitempty"`
    ValidUntil *time.Time `json:"valid_until,omitempty"`
    
}

