package shared

import (
	"time"
)

type ServerlessV1ServiceEnvironmentDeployment struct {
	AccountSid     *string    `json:"account_sid"`
	BuildSid       *string    `json:"build_sid"`
	DateCreated    *time.Time `json:"date_created"`
	DateUpdated    *time.Time `json:"date_updated"`
	EnvironmentSid *string    `json:"environment_sid"`
	ServiceSid     *string    `json:"service_sid"`
	Sid            *string    `json:"sid"`
	URL            *string    `json:"url"`
}
