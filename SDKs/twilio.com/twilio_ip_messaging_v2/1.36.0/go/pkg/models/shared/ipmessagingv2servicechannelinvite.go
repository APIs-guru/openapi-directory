package shared

import (
	"time"
)

type IPMessagingV2ServiceChannelInvite struct {
	AccountSid  *string    `json:"account_sid"`
	ChannelSid  *string    `json:"channel_sid"`
	CreatedBy   *string    `json:"created_by"`
	DateCreated *time.Time `json:"date_created"`
	DateUpdated *time.Time `json:"date_updated"`
	Identity    *string    `json:"identity"`
	RoleSid     *string    `json:"role_sid"`
	ServiceSid  *string    `json:"service_sid"`
	Sid         *string    `json:"sid"`
	URL         *string    `json:"url"`
}
