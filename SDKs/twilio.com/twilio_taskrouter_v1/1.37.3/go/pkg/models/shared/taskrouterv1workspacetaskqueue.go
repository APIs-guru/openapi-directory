package shared

import (
	"time"
)

type TaskrouterV1WorkspaceTaskQueue struct {
	AccountSid              *string                     `json:"account_sid,omitempty"`
	AssignmentActivityName  *string                     `json:"assignment_activity_name,omitempty"`
	AssignmentActivitySid   *string                     `json:"assignment_activity_sid,omitempty"`
	DateCreated             *time.Time                  `json:"date_created,omitempty"`
	DateUpdated             *time.Time                  `json:"date_updated,omitempty"`
	FriendlyName            *string                     `json:"friendly_name,omitempty"`
	Links                   map[string]interface{}      `json:"links,omitempty"`
	MaxReservedWorkers      *int64                      `json:"max_reserved_workers,omitempty"`
	ReservationActivityName *string                     `json:"reservation_activity_name,omitempty"`
	ReservationActivitySid  *string                     `json:"reservation_activity_sid,omitempty"`
	Sid                     *string                     `json:"sid,omitempty"`
	TargetWorkers           *string                     `json:"target_workers,omitempty"`
	TaskOrder               *TaskQueueEnumTaskOrderEnum `json:"task_order,omitempty"`
	URL                     *string                     `json:"url,omitempty"`
	WorkspaceSid            *string                     `json:"workspace_sid,omitempty"`
}
