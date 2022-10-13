package shared

import (
	"time"
)

type ServerlessV1Service struct {
	AccountSid         *string                `json:"account_sid"`
	DateCreated        *time.Time             `json:"date_created"`
	DateUpdated        *time.Time             `json:"date_updated"`
	DomainBase         *string                `json:"domain_base"`
	FriendlyName       *string                `json:"friendly_name"`
	IncludeCredentials *bool                  `json:"include_credentials"`
	Links              map[string]interface{} `json:"links"`
	Sid                *string                `json:"sid"`
	UIEditable         *bool                  `json:"ui_editable"`
	UniqueName         *string                `json:"unique_name"`
	URL                *string                `json:"url"`
}
