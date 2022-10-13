package shared

import (
	"time"
)

type TaskrouterV1Workspace struct {
	AccountSid           *string                      `json:"account_sid"`
	DateCreated          *time.Time                   `json:"date_created"`
	DateUpdated          *time.Time                   `json:"date_updated"`
	DefaultActivityName  *string                      `json:"default_activity_name"`
	DefaultActivitySid   *string                      `json:"default_activity_sid"`
	EventCallbackURL     *string                      `json:"event_callback_url"`
	EventsFilter         *string                      `json:"events_filter"`
	FriendlyName         *string                      `json:"friendly_name"`
	Links                map[string]interface{}       `json:"links"`
	MultiTaskEnabled     *bool                        `json:"multi_task_enabled"`
	PrioritizeQueueOrder *WorkspaceEnumQueueOrderEnum `json:"prioritize_queue_order"`
	Sid                  *string                      `json:"sid"`
	TimeoutActivityName  *string                      `json:"timeout_activity_name"`
	TimeoutActivitySid   *string                      `json:"timeout_activity_sid"`
	URL                  *string                      `json:"url"`
}
