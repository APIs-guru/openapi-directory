package shared

import (
	"time"
)

type ProxyV1ServiceSession struct {
	AccountSid          *string                `json:"account_sid"`
	ClosedReason        *string                `json:"closed_reason"`
	DateCreated         *time.Time             `json:"date_created"`
	DateEnded           *time.Time             `json:"date_ended"`
	DateExpiry          *time.Time             `json:"date_expiry"`
	DateLastInteraction *time.Time             `json:"date_last_interaction"`
	DateStarted         *time.Time             `json:"date_started"`
	DateUpdated         *time.Time             `json:"date_updated"`
	Links               map[string]interface{} `json:"links"`
	Mode                *SessionEnumModeEnum   `json:"mode"`
	ServiceSid          *string                `json:"service_sid"`
	Sid                 *string                `json:"sid"`
	Status              *SessionEnumStatusEnum `json:"status"`
	TTL                 *int64                 `json:"ttl"`
	UniqueName          *string                `json:"unique_name"`
	URL                 *string                `json:"url"`
}
