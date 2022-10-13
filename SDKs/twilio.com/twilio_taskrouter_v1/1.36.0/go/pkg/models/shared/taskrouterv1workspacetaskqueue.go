package shared

import (
	"time"
)

type TaskrouterV1WorkspaceTaskQueue struct {
	AccountSid              *string                     `json:"account_sid"`
	AssignmentActivityName  *string                     `json:"assignment_activity_name"`
	AssignmentActivitySid   *string                     `json:"assignment_activity_sid"`
	DateCreated             *time.Time                  `json:"date_created"`
	DateUpdated             *time.Time                  `json:"date_updated"`
	FriendlyName            *string                     `json:"friendly_name"`
	Links                   map[string]interface{}      `json:"links"`
	MaxReservedWorkers      *int64                      `json:"max_reserved_workers"`
	ReservationActivityName *string                     `json:"reservation_activity_name"`
	ReservationActivitySid  *string                     `json:"reservation_activity_sid"`
	Sid                     *string                     `json:"sid"`
	TargetWorkers           *string                     `json:"target_workers"`
	TaskOrder               *TaskQueueEnumTaskOrderEnum `json:"task_order"`
	URL                     *string                     `json:"url"`
	WorkspaceSid            *string                     `json:"workspace_sid"`
}
