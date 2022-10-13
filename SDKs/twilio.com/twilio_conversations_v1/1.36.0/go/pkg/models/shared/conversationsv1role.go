package shared

import (
	"time"
)

type ConversationsV1Role struct {
	AccountSid     *string               `json:"account_sid"`
	ChatServiceSid *string               `json:"chat_service_sid"`
	DateCreated    *time.Time            `json:"date_created"`
	DateUpdated    *time.Time            `json:"date_updated"`
	FriendlyName   *string               `json:"friendly_name"`
	Permissions    []string              `json:"permissions"`
	Sid            *string               `json:"sid"`
	Type           *RoleEnumRoleTypeEnum `json:"type"`
	URL            *string               `json:"url"`
}
