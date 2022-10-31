package shared

import (
	"time"
)

type TaskrouterV1WorkspaceWorker struct {
	AccountSid        *string                `json:"account_sid,omitempty"`
	ActivityName      *string                `json:"activity_name,omitempty"`
	ActivitySid       *string                `json:"activity_sid,omitempty"`
	Attributes        *string                `json:"attributes,omitempty"`
	Available         *bool                  `json:"available,omitempty"`
	DateCreated       *time.Time             `json:"date_created,omitempty"`
	DateStatusChanged *time.Time             `json:"date_status_changed,omitempty"`
	DateUpdated       *time.Time             `json:"date_updated,omitempty"`
	FriendlyName      *string                `json:"friendly_name,omitempty"`
	Links             map[string]interface{} `json:"links,omitempty"`
	Sid               *string                `json:"sid,omitempty"`
	URL               *string                `json:"url,omitempty"`
	WorkspaceSid      *string                `json:"workspace_sid,omitempty"`
}
