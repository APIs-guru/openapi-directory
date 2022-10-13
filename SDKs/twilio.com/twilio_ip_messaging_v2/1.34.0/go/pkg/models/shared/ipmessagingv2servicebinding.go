package shared

import (
	"time"
)

type IPMessagingV2ServiceBinding struct {
	AccountSid    *string                     `json:"account_sid"`
	BindingType   *BindingEnumBindingTypeEnum `json:"binding_type"`
	CredentialSid *string                     `json:"credential_sid"`
	DateCreated   *time.Time                  `json:"date_created"`
	DateUpdated   *time.Time                  `json:"date_updated"`
	Endpoint      *string                     `json:"endpoint"`
	Identity      *string                     `json:"identity"`
	Links         map[string]interface{}      `json:"links"`
	MessageTypes  []string                    `json:"message_types"`
	ServiceSid    *string                     `json:"service_sid"`
	Sid           *string                     `json:"sid"`
	URL           *string                     `json:"url"`
}
