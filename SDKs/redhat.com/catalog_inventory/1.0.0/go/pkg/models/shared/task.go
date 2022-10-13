package shared

import (
	"time"
)

type TaskStateStateEnum string

const (
	TaskStateStateEnumPending   TaskStateStateEnum = "pending"
	TaskStateStateEnumQueued    TaskStateStateEnum = "queued"
	TaskStateStateEnumRunning   TaskStateStateEnum = "running"
	TaskStateStateEnumTimedout  TaskStateStateEnum = "timedout"
	TaskStateStateEnumCompleted TaskStateStateEnum = "completed"
)

type TaskStatusStatusEnum string

const (
	TaskStatusStatusEnumOk        TaskStatusStatusEnum = "ok"
	TaskStatusStatusEnumWarn      TaskStatusStatusEnum = "warn"
	TaskStatusStatusEnumUnchanged TaskStatusStatusEnum = "unchanged"
	TaskStatusStatusEnumError     TaskStatusStatusEnum = "error"
)

type Task struct {
	ArchivedAt          *time.Time             `json:"archived_at"`
	ChildTaskID         *string                `json:"child_task_id"`
	CompletedAt         *time.Time             `json:"completed_at"`
	ControllerMessageID *string                `json:"controller_message_id"`
	CreatedAt           *time.Time             `json:"created_at"`
	ID                  *string                `json:"id"`
	Input               map[string]interface{} `json:"input"`
	Message             *string                `json:"message"`
	Name                *string                `json:"name"`
	Output              map[string]interface{} `json:"output"`
	Owner               *string                `json:"owner"`
	SourceID            *string                `json:"source_id"`
	State               *TaskStateStateEnum    `json:"state"`
	Status              *TaskStatusStatusEnum  `json:"status"`
	TargetSourceRef     *string                `json:"target_source_ref"`
	TargetType          *string                `json:"target_type"`
	Type                *string                `json:"type"`
	UpdatedAt           *time.Time             `json:"updated_at"`
}
