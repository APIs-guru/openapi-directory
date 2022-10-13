package shared

import (
	"time"
)

type ServerlessV1ServiceEnvironmentLog struct {
	AccountSid     *string           `json:"account_sid"`
	BuildSid       *string           `json:"build_sid"`
	DateCreated    *time.Time        `json:"date_created"`
	DeploymentSid  *string           `json:"deployment_sid"`
	EnvironmentSid *string           `json:"environment_sid"`
	FunctionSid    *string           `json:"function_sid"`
	Level          *LogEnumLevelEnum `json:"level"`
	Message        *string           `json:"message"`
	RequestSid     *string           `json:"request_sid"`
	ServiceSid     *string           `json:"service_sid"`
	Sid            *string           `json:"sid"`
	URL            *string           `json:"url"`
}
