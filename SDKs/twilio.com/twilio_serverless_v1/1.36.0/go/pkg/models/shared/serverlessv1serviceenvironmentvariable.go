package shared

import (
	"time"
)

type ServerlessV1ServiceEnvironmentVariable struct {
	AccountSid     *string    `json:"account_sid,omitempty"`
	DateCreated    *time.Time `json:"date_created,omitempty"`
	DateUpdated    *time.Time `json:"date_updated,omitempty"`
	EnvironmentSid *string    `json:"environment_sid,omitempty"`
	Key            *string    `json:"key,omitempty"`
	ServiceSid     *string    `json:"service_sid,omitempty"`
	Sid            *string    `json:"sid,omitempty"`
	URL            *string    `json:"url,omitempty"`
	Value          *string    `json:"value,omitempty"`
}
