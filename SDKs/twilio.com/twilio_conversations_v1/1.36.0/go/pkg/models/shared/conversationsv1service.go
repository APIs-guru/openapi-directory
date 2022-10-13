package shared

import (
	"time"
)

type ConversationsV1Service struct {
	AccountSid   *string                `json:"account_sid"`
	DateCreated  *time.Time             `json:"date_created"`
	DateUpdated  *time.Time             `json:"date_updated"`
	FriendlyName *string                `json:"friendly_name"`
	Links        map[string]interface{} `json:"links"`
	Sid          *string                `json:"sid"`
	URL          *string                `json:"url"`
}
