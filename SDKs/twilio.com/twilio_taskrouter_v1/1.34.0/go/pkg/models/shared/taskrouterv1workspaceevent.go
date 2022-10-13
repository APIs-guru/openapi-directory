package shared

import (
	"time"
)

type TaskrouterV1WorkspaceEvent struct {
	AccountSid      *string      `json:"account_sid"`
	ActorSid        *string      `json:"actor_sid"`
	ActorType       *string      `json:"actor_type"`
	ActorURL        *string      `json:"actor_url"`
	Description     *string      `json:"description"`
	EventData       *interface{} `json:"event_data"`
	EventDate       *time.Time   `json:"event_date"`
	EventDateMs     *int64       `json:"event_date_ms"`
	EventType       *string      `json:"event_type"`
	ResourceSid     *string      `json:"resource_sid"`
	ResourceType    *string      `json:"resource_type"`
	ResourceURL     *string      `json:"resource_url"`
	Sid             *string      `json:"sid"`
	Source          *string      `json:"source"`
	SourceIPAddress *string      `json:"source_ip_address"`
	URL             *string      `json:"url"`
	WorkspaceSid    *string      `json:"workspace_sid"`
}
