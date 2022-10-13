package shared

import (
	"time"
)

type ConversationsV1ServiceServiceBinding struct {
	AccountSid     *string                            `json:"account_sid"`
	BindingType    *ServiceBindingEnumBindingTypeEnum `json:"binding_type"`
	ChatServiceSid *string                            `json:"chat_service_sid"`
	CredentialSid  *string                            `json:"credential_sid"`
	DateCreated    *time.Time                         `json:"date_created"`
	DateUpdated    *time.Time                         `json:"date_updated"`
	Endpoint       *string                            `json:"endpoint"`
	Identity       *string                            `json:"identity"`
	MessageTypes   []string                           `json:"message_types"`
	Sid            *string                            `json:"sid"`
	URL            *string                            `json:"url"`
}
