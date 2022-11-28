package shared

import (
	"time"
)

type TaskrouterV1WorkspaceEvent struct {
	AccountSid      *string      `json:"account_sid,omitempty"`
	ActorSid        *string      `json:"actor_sid,omitempty"`
	ActorType       *string      `json:"actor_type,omitempty"`
	ActorURL        *string      `json:"actor_url,omitempty"`
	Description     *string      `json:"description,omitempty"`
	EventData       *interface{} `json:"event_data,omitempty"`
	EventDate       *time.Time   `json:"event_date,omitempty"`
	EventDateMs     *int64       `json:"event_date_ms,omitempty"`
	EventType       *string      `json:"event_type,omitempty"`
	ResourceSid     *string      `json:"resource_sid,omitempty"`
	ResourceType    *string      `json:"resource_type,omitempty"`
	ResourceURL     *string      `json:"resource_url,omitempty"`
	Sid             *string      `json:"sid,omitempty"`
	Source          *string      `json:"source,omitempty"`
	SourceIPAddress *string      `json:"source_ip_address,omitempty"`
	URL             *string      `json:"url,omitempty"`
	WorkspaceSid    *string      `json:"workspace_sid,omitempty"`
}
