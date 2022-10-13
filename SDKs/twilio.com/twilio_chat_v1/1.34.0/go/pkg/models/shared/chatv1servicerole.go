package shared

import (
	"time"
)

type ChatV1ServiceRole struct {
	AccountSid   *string               `json:"account_sid"`
	DateCreated  *time.Time            `json:"date_created"`
	DateUpdated  *time.Time            `json:"date_updated"`
	FriendlyName *string               `json:"friendly_name"`
	Permissions  []string              `json:"permissions"`
	ServiceSid   *string               `json:"service_sid"`
	Sid          *string               `json:"sid"`
	Type         *RoleEnumRoleTypeEnum `json:"type"`
	URL          *string               `json:"url"`
}
