package shared

import (
	"time"
)

type ServerlessV1ServiceEnvironmentVariable struct {
	AccountSid     *string    `json:"account_sid"`
	DateCreated    *time.Time `json:"date_created"`
	DateUpdated    *time.Time `json:"date_updated"`
	EnvironmentSid *string    `json:"environment_sid"`
	Key            *string    `json:"key"`
	ServiceSid     *string    `json:"service_sid"`
	Sid            *string    `json:"sid"`
	URL            *string    `json:"url"`
	Value          *string    `json:"value"`
}
