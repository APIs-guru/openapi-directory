package shared

import (
	"time"
)

type ChatV2ServiceChannelChannelWebhook struct {
	AccountSid    *string      `json:"account_sid,omitempty"`
	ChannelSid    *string      `json:"channel_sid,omitempty"`
	Configuration *interface{} `json:"configuration,omitempty"`
	DateCreated   *time.Time   `json:"date_created,omitempty"`
	DateUpdated   *time.Time   `json:"date_updated,omitempty"`
	ServiceSid    *string      `json:"service_sid,omitempty"`
	Sid           *string      `json:"sid,omitempty"`
	Type          *string      `json:"type,omitempty"`
	URL           *string      `json:"url,omitempty"`
}
