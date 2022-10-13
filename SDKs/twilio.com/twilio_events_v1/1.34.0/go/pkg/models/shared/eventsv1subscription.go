package shared

import (
	"time"
)

type EventsV1Subscription struct {
	AccountSid  *string                `json:"account_sid"`
	DateCreated *time.Time             `json:"date_created"`
	DateUpdated *time.Time             `json:"date_updated"`
	Description *string                `json:"description"`
	Links       map[string]interface{} `json:"links"`
	Sid         *string                `json:"sid"`
	SinkSid     *string                `json:"sink_sid"`
	URL         *string                `json:"url"`
}
