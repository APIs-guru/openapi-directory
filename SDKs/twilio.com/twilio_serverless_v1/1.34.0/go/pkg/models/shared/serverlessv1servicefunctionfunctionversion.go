package shared

import (
	"time"
)

type ServerlessV1ServiceFunctionFunctionVersion struct {
	AccountSid  *string                            `json:"account_sid"`
	DateCreated *time.Time                         `json:"date_created"`
	FunctionSid *string                            `json:"function_sid"`
	Links       map[string]interface{}             `json:"links"`
	Path        *string                            `json:"path"`
	ServiceSid  *string                            `json:"service_sid"`
	Sid         *string                            `json:"sid"`
	URL         *string                            `json:"url"`
	Visibility  *FunctionVersionEnumVisibilityEnum `json:"visibility"`
}
