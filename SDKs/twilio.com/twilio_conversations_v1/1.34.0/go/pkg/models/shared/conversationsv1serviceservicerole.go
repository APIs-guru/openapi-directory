package shared

import (
	"time"
)

type ConversationsV1ServiceServiceRole struct {
	AccountSid     *string                      `json:"account_sid"`
	ChatServiceSid *string                      `json:"chat_service_sid"`
	DateCreated    *time.Time                   `json:"date_created"`
	DateUpdated    *time.Time                   `json:"date_updated"`
	FriendlyName   *string                      `json:"friendly_name"`
	Permissions    []string                     `json:"permissions"`
	Sid            *string                      `json:"sid"`
	Type           *ServiceRoleEnumRoleTypeEnum `json:"type"`
	URL            *string                      `json:"url"`
}
