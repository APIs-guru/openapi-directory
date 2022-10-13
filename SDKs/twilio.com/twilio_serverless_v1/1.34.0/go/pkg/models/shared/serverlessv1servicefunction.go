package shared

import (
	"time"
)

type ServerlessV1ServiceFunction struct {
	AccountSid   *string                `json:"account_sid"`
	DateCreated  *time.Time             `json:"date_created"`
	DateUpdated  *time.Time             `json:"date_updated"`
	FriendlyName *string                `json:"friendly_name"`
	Links        map[string]interface{} `json:"links"`
	ServiceSid   *string                `json:"service_sid"`
	Sid          *string                `json:"sid"`
	URL          *string                `json:"url"`
}
