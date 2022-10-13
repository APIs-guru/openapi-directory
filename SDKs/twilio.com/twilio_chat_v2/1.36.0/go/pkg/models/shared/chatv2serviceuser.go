package shared

import (
	"time"
)

type ChatV2ServiceUser struct {
	AccountSid          *string                `json:"account_sid"`
	Attributes          *string                `json:"attributes"`
	DateCreated         *time.Time             `json:"date_created"`
	DateUpdated         *time.Time             `json:"date_updated"`
	FriendlyName        *string                `json:"friendly_name"`
	Identity            *string                `json:"identity"`
	IsNotifiable        *bool                  `json:"is_notifiable"`
	IsOnline            *bool                  `json:"is_online"`
	JoinedChannelsCount *int64                 `json:"joined_channels_count"`
	Links               map[string]interface{} `json:"links"`
	RoleSid             *string                `json:"role_sid"`
	ServiceSid          *string                `json:"service_sid"`
	Sid                 *string                `json:"sid"`
	URL                 *string                `json:"url"`
}
