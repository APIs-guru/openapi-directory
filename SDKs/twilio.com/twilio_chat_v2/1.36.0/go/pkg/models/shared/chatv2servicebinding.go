package shared

import (
	"time"
)

type ChatV2ServiceBinding struct {
	AccountSid    *string                     `json:"account_sid,omitempty"`
	BindingType   *BindingEnumBindingTypeEnum `json:"binding_type,omitempty"`
	CredentialSid *string                     `json:"credential_sid,omitempty"`
	DateCreated   *time.Time                  `json:"date_created,omitempty"`
	DateUpdated   *time.Time                  `json:"date_updated,omitempty"`
	Endpoint      *string                     `json:"endpoint,omitempty"`
	Identity      *string                     `json:"identity,omitempty"`
	Links         map[string]interface{}      `json:"links,omitempty"`
	MessageTypes  []string                    `json:"message_types,omitempty"`
	ServiceSid    *string                     `json:"service_sid,omitempty"`
	Sid           *string                     `json:"sid,omitempty"`
	URL           *string                     `json:"url,omitempty"`
}
