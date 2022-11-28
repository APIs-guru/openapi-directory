package shared

import (
	"time"
)

type StudioV1Flow struct {
	AccountSid   *string                `json:"account_sid,omitempty"`
	DateCreated  *time.Time             `json:"date_created,omitempty"`
	DateUpdated  *time.Time             `json:"date_updated,omitempty"`
	FriendlyName *string                `json:"friendly_name,omitempty"`
	Links        map[string]interface{} `json:"links,omitempty"`
	Sid          *string                `json:"sid,omitempty"`
	Status       *FlowEnumStatusEnum    `json:"status,omitempty"`
	URL          *string                `json:"url,omitempty"`
	Version      *int64                 `json:"version,omitempty"`
}
