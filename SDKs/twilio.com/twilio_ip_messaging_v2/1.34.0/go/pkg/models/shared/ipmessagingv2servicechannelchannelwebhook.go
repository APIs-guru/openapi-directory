package shared

import (
	"time"
)

type IPMessagingV2ServiceChannelChannelWebhook struct {
	AccountSid    *string      `json:"account_sid"`
	ChannelSid    *string      `json:"channel_sid"`
	Configuration *interface{} `json:"configuration"`
	DateCreated   *time.Time   `json:"date_created"`
	DateUpdated   *time.Time   `json:"date_updated"`
	ServiceSid    *string      `json:"service_sid"`
	Sid           *string      `json:"sid"`
	Type          *string      `json:"type"`
	URL           *string      `json:"url"`
}
