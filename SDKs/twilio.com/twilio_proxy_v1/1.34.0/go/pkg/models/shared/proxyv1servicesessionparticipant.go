package shared

import (
	"time"
)

type ProxyV1ServiceSessionParticipant struct {
	AccountSid         *string                `json:"account_sid"`
	DateCreated        *time.Time             `json:"date_created"`
	DateDeleted        *time.Time             `json:"date_deleted"`
	DateUpdated        *time.Time             `json:"date_updated"`
	FriendlyName       *string                `json:"friendly_name"`
	Identifier         *string                `json:"identifier"`
	Links              map[string]interface{} `json:"links"`
	ProxyIdentifier    *string                `json:"proxy_identifier"`
	ProxyIdentifierSid *string                `json:"proxy_identifier_sid"`
	ServiceSid         *string                `json:"service_sid"`
	SessionSid         *string                `json:"session_sid"`
	Sid                *string                `json:"sid"`
	URL                *string                `json:"url"`
}
