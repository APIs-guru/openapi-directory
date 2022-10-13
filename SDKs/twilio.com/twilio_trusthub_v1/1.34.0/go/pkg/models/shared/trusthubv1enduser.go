package shared

import (
	"time"
)

type TrusthubV1EndUser struct {
	AccountSid   *string      `json:"account_sid"`
	Attributes   *interface{} `json:"attributes"`
	DateCreated  *time.Time   `json:"date_created"`
	DateUpdated  *time.Time   `json:"date_updated"`
	FriendlyName *string      `json:"friendly_name"`
	Sid          *string      `json:"sid"`
	Type         *string      `json:"type"`
	URL          *string      `json:"url"`
}
