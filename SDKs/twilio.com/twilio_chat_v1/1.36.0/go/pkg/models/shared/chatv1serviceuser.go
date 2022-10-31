package shared

import (
	"time"
)

type ChatV1ServiceUser struct {
	AccountSid          *string                `json:"account_sid,omitempty"`
	Attributes          *string                `json:"attributes,omitempty"`
	DateCreated         *time.Time             `json:"date_created,omitempty"`
	DateUpdated         *time.Time             `json:"date_updated,omitempty"`
	FriendlyName        *string                `json:"friendly_name,omitempty"`
	Identity            *string                `json:"identity,omitempty"`
	IsNotifiable        *bool                  `json:"is_notifiable,omitempty"`
	IsOnline            *bool                  `json:"is_online,omitempty"`
	JoinedChannelsCount *int64                 `json:"joined_channels_count,omitempty"`
	Links               map[string]interface{} `json:"links,omitempty"`
	RoleSid             *string                `json:"role_sid,omitempty"`
	ServiceSid          *string                `json:"service_sid,omitempty"`
	Sid                 *string                `json:"sid,omitempty"`
	URL                 *string                `json:"url,omitempty"`
}
