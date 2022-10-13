package shared

import (
	"time"
)

type IPMessagingV1ServiceChannelMember struct {
	AccountSid               *string    `json:"account_sid"`
	ChannelSid               *string    `json:"channel_sid"`
	DateCreated              *time.Time `json:"date_created"`
	DateUpdated              *time.Time `json:"date_updated"`
	Identity                 *string    `json:"identity"`
	LastConsumedMessageIndex *int64     `json:"last_consumed_message_index"`
	LastConsumptionTimestamp *time.Time `json:"last_consumption_timestamp"`
	RoleSid                  *string    `json:"role_sid"`
	ServiceSid               *string    `json:"service_sid"`
	Sid                      *string    `json:"sid"`
	URL                      *string    `json:"url"`
}
