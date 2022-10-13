package shared

import (
	"time"
)

type MonitorV1Event struct {
	AccountSid      *string                `json:"account_sid"`
	ActorSid        *string                `json:"actor_sid"`
	ActorType       *string                `json:"actor_type"`
	Description     *string                `json:"description"`
	EventData       *interface{}           `json:"event_data"`
	EventDate       *time.Time             `json:"event_date"`
	EventType       *string                `json:"event_type"`
	Links           map[string]interface{} `json:"links"`
	ResourceSid     *string                `json:"resource_sid"`
	ResourceType    *string                `json:"resource_type"`
	Sid             *string                `json:"sid"`
	Source          *string                `json:"source"`
	SourceIPAddress *string                `json:"source_ip_address"`
	URL             *string                `json:"url"`
}
