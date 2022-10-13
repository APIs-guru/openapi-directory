package shared

import (
	"time"
)

type NotifyV1ServiceBinding struct {
	AccountSid                  *string                `json:"account_sid"`
	Address                     *string                `json:"address"`
	BindingType                 *string                `json:"binding_type"`
	CredentialSid               *string                `json:"credential_sid"`
	DateCreated                 *time.Time             `json:"date_created"`
	DateUpdated                 *time.Time             `json:"date_updated"`
	Endpoint                    *string                `json:"endpoint"`
	Identity                    *string                `json:"identity"`
	Links                       map[string]interface{} `json:"links"`
	NotificationProtocolVersion *string                `json:"notification_protocol_version"`
	ServiceSid                  *string                `json:"service_sid"`
	Sid                         *string                `json:"sid"`
	Tags                        []string               `json:"tags"`
	URL                         *string                `json:"url"`
}
