package shared

import (
	"time"
)

type NotifyV1ServiceBinding struct {
	AccountSid                  *string                `json:"account_sid,omitempty"`
	Address                     *string                `json:"address,omitempty"`
	BindingType                 *string                `json:"binding_type,omitempty"`
	CredentialSid               *string                `json:"credential_sid,omitempty"`
	DateCreated                 *time.Time             `json:"date_created,omitempty"`
	DateUpdated                 *time.Time             `json:"date_updated,omitempty"`
	Endpoint                    *string                `json:"endpoint,omitempty"`
	Identity                    *string                `json:"identity,omitempty"`
	Links                       map[string]interface{} `json:"links,omitempty"`
	NotificationProtocolVersion *string                `json:"notification_protocol_version,omitempty"`
	ServiceSid                  *string                `json:"service_sid,omitempty"`
	Sid                         *string                `json:"sid,omitempty"`
	Tags                        []string               `json:"tags,omitempty"`
	URL                         *string                `json:"url,omitempty"`
}
