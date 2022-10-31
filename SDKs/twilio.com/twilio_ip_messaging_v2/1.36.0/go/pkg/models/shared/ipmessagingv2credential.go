package shared

import (
	"time"
)

type IPMessagingV2Credential struct {
	AccountSid   *string                        `json:"account_sid,omitempty"`
	DateCreated  *time.Time                     `json:"date_created,omitempty"`
	DateUpdated  *time.Time                     `json:"date_updated,omitempty"`
	FriendlyName *string                        `json:"friendly_name,omitempty"`
	Sandbox      *string                        `json:"sandbox,omitempty"`
	Sid          *string                        `json:"sid,omitempty"`
	Type         *CredentialEnumPushServiceEnum `json:"type,omitempty"`
	URL          *string                        `json:"url,omitempty"`
}
