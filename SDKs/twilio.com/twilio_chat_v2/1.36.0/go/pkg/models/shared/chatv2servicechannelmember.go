package shared

import (
	"time"
)

type ChatV2ServiceChannelMember struct {
	AccountSid               *string    `json:"account_sid,omitempty"`
	Attributes               *string    `json:"attributes,omitempty"`
	ChannelSid               *string    `json:"channel_sid,omitempty"`
	DateCreated              *time.Time `json:"date_created,omitempty"`
	DateUpdated              *time.Time `json:"date_updated,omitempty"`
	Identity                 *string    `json:"identity,omitempty"`
	LastConsumedMessageIndex *int64     `json:"last_consumed_message_index,omitempty"`
	LastConsumptionTimestamp *time.Time `json:"last_consumption_timestamp,omitempty"`
	RoleSid                  *string    `json:"role_sid,omitempty"`
	ServiceSid               *string    `json:"service_sid,omitempty"`
	Sid                      *string    `json:"sid,omitempty"`
	URL                      *string    `json:"url,omitempty"`
}
