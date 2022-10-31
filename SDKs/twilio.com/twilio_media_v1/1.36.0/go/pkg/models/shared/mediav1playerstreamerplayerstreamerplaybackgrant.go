package shared

import (
	"time"
)

type MediaV1PlayerStreamerPlayerStreamerPlaybackGrant struct {
	AccountSid  *string      `json:"account_sid,omitempty"`
	DateCreated *time.Time   `json:"date_created,omitempty"`
	Grant       *interface{} `json:"grant,omitempty"`
	Sid         *string      `json:"sid,omitempty"`
	URL         *string      `json:"url,omitempty"`
}
