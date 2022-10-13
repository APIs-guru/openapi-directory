package shared

import (
	"time"
)

type AccountsV1CredentialCredentialPublicKey struct {
	AccountSid   *string    `json:"account_sid"`
	DateCreated  *time.Time `json:"date_created"`
	DateUpdated  *time.Time `json:"date_updated"`
	FriendlyName *string    `json:"friendly_name"`
	Sid          *string    `json:"sid"`
	URL          *string    `json:"url"`
}
