package shared

import (
	"time"
)

type TrunkingV1TrunkIPAccessControlList struct {
	AccountSid   *string    `json:"account_sid"`
	DateCreated  *time.Time `json:"date_created"`
	DateUpdated  *time.Time `json:"date_updated"`
	FriendlyName *string    `json:"friendly_name"`
	Sid          *string    `json:"sid"`
	TrunkSid     *string    `json:"trunk_sid"`
	URL          *string    `json:"url"`
}
