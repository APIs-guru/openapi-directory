package shared

import (
	"time"
)

type AccountsV1SecondaryAuthToken struct {
	AccountSid         *string    `json:"account_sid"`
	DateCreated        *time.Time `json:"date_created"`
	DateUpdated        *time.Time `json:"date_updated"`
	SecondaryAuthToken *string    `json:"secondary_auth_token"`
	URL                *string    `json:"url"`
}
