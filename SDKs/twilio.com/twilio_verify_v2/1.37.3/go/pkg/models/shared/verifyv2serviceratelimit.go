package shared

import (
	"time"
)

type VerifyV2ServiceRateLimit struct {
	AccountSid  *string                `json:"account_sid,omitempty"`
	DateCreated *time.Time             `json:"date_created,omitempty"`
	DateUpdated *time.Time             `json:"date_updated,omitempty"`
	Description *string                `json:"description,omitempty"`
	Links       map[string]interface{} `json:"links,omitempty"`
	ServiceSid  *string                `json:"service_sid,omitempty"`
	Sid         *string                `json:"sid,omitempty"`
	UniqueName  *string                `json:"unique_name,omitempty"`
	URL         *string                `json:"url,omitempty"`
}
