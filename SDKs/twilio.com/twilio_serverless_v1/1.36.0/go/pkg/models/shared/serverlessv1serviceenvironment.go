package shared

import (
	"time"
)

type ServerlessV1ServiceEnvironment struct {
	AccountSid   *string                `json:"account_sid"`
	BuildSid     *string                `json:"build_sid"`
	DateCreated  *time.Time             `json:"date_created"`
	DateUpdated  *time.Time             `json:"date_updated"`
	DomainName   *string                `json:"domain_name"`
	DomainSuffix *string                `json:"domain_suffix"`
	Links        map[string]interface{} `json:"links"`
	ServiceSid   *string                `json:"service_sid"`
	Sid          *string                `json:"sid"`
	UniqueName   *string                `json:"unique_name"`
	URL          *string                `json:"url"`
}
