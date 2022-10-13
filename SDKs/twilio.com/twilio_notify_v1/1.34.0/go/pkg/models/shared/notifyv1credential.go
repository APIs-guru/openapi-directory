package shared

import (
	"time"
)

type NotifyV1Credential struct {
	AccountSid   *string                        `json:"account_sid"`
	DateCreated  *time.Time                     `json:"date_created"`
	DateUpdated  *time.Time                     `json:"date_updated"`
	FriendlyName *string                        `json:"friendly_name"`
	Sandbox      *string                        `json:"sandbox"`
	Sid          *string                        `json:"sid"`
	Type         *CredentialEnumPushServiceEnum `json:"type"`
	URL          *string                        `json:"url"`
}
