package shared

import (
	"time"
)

type MediaV1PlayerStreamerPlayerStreamerPlaybackGrant struct {
	AccountSid  *string      `json:"account_sid"`
	DateCreated *time.Time   `json:"date_created"`
	Grant       *interface{} `json:"grant"`
	Sid         *string      `json:"sid"`
	URL         *string      `json:"url"`
}
