package shared

import (
	"time"
)

type MonitorV1Event struct {
	AccountSid      *string                `json:"account_sid,omitempty"`
	ActorSid        *string                `json:"actor_sid,omitempty"`
	ActorType       *string                `json:"actor_type,omitempty"`
	Description     *string                `json:"description,omitempty"`
	EventData       *interface{}           `json:"event_data,omitempty"`
	EventDate       *time.Time             `json:"event_date,omitempty"`
	EventType       *string                `json:"event_type,omitempty"`
	Links           map[string]interface{} `json:"links,omitempty"`
	ResourceSid     *string                `json:"resource_sid,omitempty"`
	ResourceType    *string                `json:"resource_type,omitempty"`
	Sid             *string                `json:"sid,omitempty"`
	Source          *string                `json:"source,omitempty"`
	SourceIPAddress *string                `json:"source_ip_address,omitempty"`
	URL             *string                `json:"url,omitempty"`
}
