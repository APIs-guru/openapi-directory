package shared

import (
"time")

type VerifyV2ServiceRateLimitBucket struct {
    AccountSid *string `json:"account_sid,omitempty"`
    DateCreated *time.Time `json:"date_created,omitempty"`
    DateUpdated *time.Time `json:"date_updated,omitempty"`
    Interval *int64 `json:"interval,omitempty"`
    Max *int64 `json:"max,omitempty"`
    RateLimitSid *string `json:"rate_limit_sid,omitempty"`
    ServiceSid *string `json:"service_sid,omitempty"`
    Sid *string `json:"sid,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

