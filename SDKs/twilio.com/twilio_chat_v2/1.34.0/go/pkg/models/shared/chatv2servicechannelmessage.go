package shared

import (
	"time"
)

type ChatV2ServiceChannelMessage struct {
	AccountSid    *string      `json:"account_sid"`
	Attributes    *string      `json:"attributes"`
	Body          *string      `json:"body"`
	ChannelSid    *string      `json:"channel_sid"`
	DateCreated   *time.Time   `json:"date_created"`
	DateUpdated   *time.Time   `json:"date_updated"`
	From          *string      `json:"from"`
	Index         *int64       `json:"index"`
	LastUpdatedBy *string      `json:"last_updated_by"`
	Media         *interface{} `json:"media"`
	ServiceSid    *string      `json:"service_sid"`
	Sid           *string      `json:"sid"`
	To            *string      `json:"to"`
	Type          *string      `json:"type"`
	URL           *string      `json:"url"`
	WasEdited     *bool        `json:"was_edited"`
}
