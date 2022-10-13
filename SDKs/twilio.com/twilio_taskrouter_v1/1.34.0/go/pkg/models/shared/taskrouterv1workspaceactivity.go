package shared

import (
	"time"
)

type TaskrouterV1WorkspaceActivity struct {
	AccountSid   *string                `json:"account_sid"`
	Available    *bool                  `json:"available"`
	DateCreated  *time.Time             `json:"date_created"`
	DateUpdated  *time.Time             `json:"date_updated"`
	FriendlyName *string                `json:"friendly_name"`
	Links        map[string]interface{} `json:"links"`
	Sid          *string                `json:"sid"`
	URL          *string                `json:"url"`
	WorkspaceSid *string                `json:"workspace_sid"`
}
