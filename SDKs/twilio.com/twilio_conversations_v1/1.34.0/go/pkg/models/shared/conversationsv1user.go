package shared

import (
	"time"
)

type ConversationsV1User struct {
	AccountSid     *string                `json:"account_sid"`
	Attributes     *string                `json:"attributes"`
	ChatServiceSid *string                `json:"chat_service_sid"`
	DateCreated    *time.Time             `json:"date_created"`
	DateUpdated    *time.Time             `json:"date_updated"`
	FriendlyName   *string                `json:"friendly_name"`
	Identity       *string                `json:"identity"`
	IsNotifiable   *bool                  `json:"is_notifiable"`
	IsOnline       *bool                  `json:"is_online"`
	Links          map[string]interface{} `json:"links"`
	RoleSid        *string                `json:"role_sid"`
	Sid            *string                `json:"sid"`
	URL            *string                `json:"url"`
}
