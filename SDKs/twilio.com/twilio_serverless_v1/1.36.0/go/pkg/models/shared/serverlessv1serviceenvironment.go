package shared

import (
	"time"
)

type ServerlessV1ServiceEnvironment struct {
	AccountSid   *string                `json:"account_sid,omitempty"`
	BuildSid     *string                `json:"build_sid,omitempty"`
	DateCreated  *time.Time             `json:"date_created,omitempty"`
	DateUpdated  *time.Time             `json:"date_updated,omitempty"`
	DomainName   *string                `json:"domain_name,omitempty"`
	DomainSuffix *string                `json:"domain_suffix,omitempty"`
	Links        map[string]interface{} `json:"links,omitempty"`
	ServiceSid   *string                `json:"service_sid,omitempty"`
	Sid          *string                `json:"sid,omitempty"`
	UniqueName   *string                `json:"unique_name,omitempty"`
	URL          *string                `json:"url,omitempty"`
}
