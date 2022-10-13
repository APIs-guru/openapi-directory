package shared

import (
	"time"
)

type StudioV1Flow struct {
	AccountSid   *string                `json:"account_sid"`
	DateCreated  *time.Time             `json:"date_created"`
	DateUpdated  *time.Time             `json:"date_updated"`
	FriendlyName *string                `json:"friendly_name"`
	Links        map[string]interface{} `json:"links"`
	Sid          *string                `json:"sid"`
	Status       *FlowEnumStatusEnum    `json:"status"`
	URL          *string                `json:"url"`
	Version      *int64                 `json:"version"`
}
