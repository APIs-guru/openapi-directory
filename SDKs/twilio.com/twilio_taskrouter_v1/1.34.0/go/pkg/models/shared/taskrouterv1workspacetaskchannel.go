package shared

import (
	"time"
)

type TaskrouterV1WorkspaceTaskChannel struct {
	AccountSid              *string                `json:"account_sid"`
	ChannelOptimizedRouting *bool                  `json:"channel_optimized_routing"`
	DateCreated             *time.Time             `json:"date_created"`
	DateUpdated             *time.Time             `json:"date_updated"`
	FriendlyName            *string                `json:"friendly_name"`
	Links                   map[string]interface{} `json:"links"`
	Sid                     *string                `json:"sid"`
	UniqueName              *string                `json:"unique_name"`
	URL                     *string                `json:"url"`
	WorkspaceSid            *string                `json:"workspace_sid"`
}
