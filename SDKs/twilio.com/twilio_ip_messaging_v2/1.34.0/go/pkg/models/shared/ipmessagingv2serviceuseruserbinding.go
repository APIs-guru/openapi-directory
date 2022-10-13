package shared

import (
	"time"
)

type IPMessagingV2ServiceUserUserBinding struct {
	AccountSid    *string                         `json:"account_sid"`
	BindingType   *UserBindingEnumBindingTypeEnum `json:"binding_type"`
	CredentialSid *string                         `json:"credential_sid"`
	DateCreated   *time.Time                      `json:"date_created"`
	DateUpdated   *time.Time                      `json:"date_updated"`
	Endpoint      *string                         `json:"endpoint"`
	Identity      *string                         `json:"identity"`
	MessageTypes  []string                        `json:"message_types"`
	ServiceSid    *string                         `json:"service_sid"`
	Sid           *string                         `json:"sid"`
	URL           *string                         `json:"url"`
	UserSid       *string                         `json:"user_sid"`
}
