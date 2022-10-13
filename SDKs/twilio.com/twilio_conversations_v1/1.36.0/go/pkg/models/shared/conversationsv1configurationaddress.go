package shared

import (
	"time"
)

type ConversationsV1ConfigurationAddress struct {
	AccountSid   *string      `json:"account_sid"`
	Address      *string      `json:"address"`
	AutoCreation *interface{} `json:"auto_creation"`
	DateCreated  *time.Time   `json:"date_created"`
	DateUpdated  *time.Time   `json:"date_updated"`
	FriendlyName *string      `json:"friendly_name"`
	Sid          *string      `json:"sid"`
	Type         *string      `json:"type"`
	URL          *string      `json:"url"`
}
