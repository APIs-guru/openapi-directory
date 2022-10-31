package shared

import (
	"time"
)

type ServerlessV1ServiceFunction struct {
	AccountSid   *string                `json:"account_sid,omitempty"`
	DateCreated  *time.Time             `json:"date_created,omitempty"`
	DateUpdated  *time.Time             `json:"date_updated,omitempty"`
	FriendlyName *string                `json:"friendly_name,omitempty"`
	Links        map[string]interface{} `json:"links,omitempty"`
	ServiceSid   *string                `json:"service_sid,omitempty"`
	Sid          *string                `json:"sid,omitempty"`
	URL          *string                `json:"url,omitempty"`
}
