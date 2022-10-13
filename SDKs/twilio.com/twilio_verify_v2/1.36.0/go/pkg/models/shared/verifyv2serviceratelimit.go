package shared

import (
	"time"
)

type VerifyV2ServiceRateLimit struct {
	AccountSid  *string                `json:"account_sid"`
	DateCreated *time.Time             `json:"date_created"`
	DateUpdated *time.Time             `json:"date_updated"`
	Description *string                `json:"description"`
	Links       map[string]interface{} `json:"links"`
	ServiceSid  *string                `json:"service_sid"`
	Sid         *string                `json:"sid"`
	UniqueName  *string                `json:"unique_name"`
	URL         *string                `json:"url"`
}
