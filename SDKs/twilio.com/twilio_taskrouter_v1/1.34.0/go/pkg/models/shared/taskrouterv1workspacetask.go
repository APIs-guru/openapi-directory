package shared

import (
	"time"
)

type TaskrouterV1WorkspaceTask struct {
	AccountSid            *string                `json:"account_sid"`
	Addons                *string                `json:"addons"`
	Age                   *int64                 `json:"age"`
	AssignmentStatus      *TaskEnumStatusEnum    `json:"assignment_status"`
	Attributes            *string                `json:"attributes"`
	DateCreated           *time.Time             `json:"date_created"`
	DateUpdated           *time.Time             `json:"date_updated"`
	Links                 map[string]interface{} `json:"links"`
	Priority              *int64                 `json:"priority"`
	Reason                *string                `json:"reason"`
	Sid                   *string                `json:"sid"`
	TaskChannelSid        *string                `json:"task_channel_sid"`
	TaskChannelUniqueName *string                `json:"task_channel_unique_name"`
	TaskQueueEnteredDate  *time.Time             `json:"task_queue_entered_date"`
	TaskQueueFriendlyName *string                `json:"task_queue_friendly_name"`
	TaskQueueSid          *string                `json:"task_queue_sid"`
	Timeout               *int64                 `json:"timeout"`
	URL                   *string                `json:"url"`
	WorkflowFriendlyName  *string                `json:"workflow_friendly_name"`
	WorkflowSid           *string                `json:"workflow_sid"`
	WorkspaceSid          *string                `json:"workspace_sid"`
}
