package shared

import (
	"time"
)

type VerifyV2ServiceEntity struct {
	AccountSid  *string                `json:"account_sid"`
	DateCreated *time.Time             `json:"date_created"`
	DateUpdated *time.Time             `json:"date_updated"`
	Identity    *string                `json:"identity"`
	Links       map[string]interface{} `json:"links"`
	ServiceSid  *string                `json:"service_sid"`
	Sid         *string                `json:"sid"`
	URL         *string                `json:"url"`
}
