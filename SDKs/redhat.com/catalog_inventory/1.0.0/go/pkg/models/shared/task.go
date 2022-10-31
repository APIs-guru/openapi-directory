package shared

import (
	"time"
)

type TaskStateEnum string

const (
	TaskStateEnumPending   TaskStateEnum = "pending"
	TaskStateEnumQueued    TaskStateEnum = "queued"
	TaskStateEnumRunning   TaskStateEnum = "running"
	TaskStateEnumTimedout  TaskStateEnum = "timedout"
	TaskStateEnumCompleted TaskStateEnum = "completed"
)

type TaskStatusEnum string

const (
	TaskStatusEnumOk        TaskStatusEnum = "ok"
	TaskStatusEnumWarn      TaskStatusEnum = "warn"
	TaskStatusEnumUnchanged TaskStatusEnum = "unchanged"
	TaskStatusEnumError     TaskStatusEnum = "error"
)

type Task struct {
	ArchivedAt          *time.Time             `json:"archived_at,omitempty"`
	ChildTaskID         *string                `json:"child_task_id,omitempty"`
	CompletedAt         *time.Time             `json:"completed_at,omitempty"`
	ControllerMessageID *string                `json:"controller_message_id,omitempty"`
	CreatedAt           *time.Time             `json:"created_at,omitempty"`
	ID                  *string                `json:"id,omitempty"`
	Input               map[string]interface{} `json:"input,omitempty"`
	Message             *string                `json:"message,omitempty"`
	Name                *string                `json:"name,omitempty"`
	Output              map[string]interface{} `json:"output,omitempty"`
	Owner               *string                `json:"owner,omitempty"`
	SourceID            *string                `json:"source_id,omitempty"`
	State               *TaskStateEnum         `json:"state,omitempty"`
	Status              *TaskStatusEnum        `json:"status,omitempty"`
	TargetSourceRef     *string                `json:"target_source_ref,omitempty"`
	TargetType          *string                `json:"target_type,omitempty"`
	Type                *string                `json:"type,omitempty"`
	UpdatedAt           *time.Time             `json:"updated_at,omitempty"`
}
