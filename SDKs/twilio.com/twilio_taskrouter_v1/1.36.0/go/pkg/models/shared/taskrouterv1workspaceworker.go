package shared

import (
	"time"
)

type TaskrouterV1WorkspaceWorker struct {
	AccountSid        *string                `json:"account_sid"`
	ActivityName      *string                `json:"activity_name"`
	ActivitySid       *string                `json:"activity_sid"`
	Attributes        *string                `json:"attributes"`
	Available         *bool                  `json:"available"`
	DateCreated       *time.Time             `json:"date_created"`
	DateStatusChanged *time.Time             `json:"date_status_changed"`
	DateUpdated       *time.Time             `json:"date_updated"`
	FriendlyName      *string                `json:"friendly_name"`
	Links             map[string]interface{} `json:"links"`
	Sid               *string                `json:"sid"`
	URL               *string                `json:"url"`
	WorkspaceSid      *string                `json:"workspace_sid"`
}
