package shared

import (
	"time"
)

type TaskrouterV1WorkspaceTaskChannel struct {
	AccountSid              *string                `json:"account_sid,omitempty"`
	ChannelOptimizedRouting *bool                  `json:"channel_optimized_routing,omitempty"`
	DateCreated             *time.Time             `json:"date_created,omitempty"`
	DateUpdated             *time.Time             `json:"date_updated,omitempty"`
	FriendlyName            *string                `json:"friendly_name,omitempty"`
	Links                   map[string]interface{} `json:"links,omitempty"`
	Sid                     *string                `json:"sid,omitempty"`
	UniqueName              *string                `json:"unique_name,omitempty"`
	URL                     *string                `json:"url,omitempty"`
	WorkspaceSid            *string                `json:"workspace_sid,omitempty"`
}
