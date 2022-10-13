package shared

import (
	"time"
)

type IPMessagingV2ServiceChannel struct {
	AccountSid    *string                     `json:"account_sid"`
	Attributes    *string                     `json:"attributes"`
	CreatedBy     *string                     `json:"created_by"`
	DateCreated   *time.Time                  `json:"date_created"`
	DateUpdated   *time.Time                  `json:"date_updated"`
	FriendlyName  *string                     `json:"friendly_name"`
	Links         map[string]interface{}      `json:"links"`
	MembersCount  *int64                      `json:"members_count"`
	MessagesCount *int64                      `json:"messages_count"`
	ServiceSid    *string                     `json:"service_sid"`
	Sid           *string                     `json:"sid"`
	Type          *ChannelEnumChannelTypeEnum `json:"type"`
	UniqueName    *string                     `json:"unique_name"`
	URL           *string                     `json:"url"`
}
