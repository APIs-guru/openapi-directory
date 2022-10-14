package shared

import (
	"time"
)

type TaskrouterV1WorkspaceTask struct {
	AccountSid            *string                `json:"account_sid,omitempty"`
	Addons                *string                `json:"addons,omitempty"`
	Age                   *int64                 `json:"age,omitempty"`
	AssignmentStatus      *TaskEnumStatusEnum    `json:"assignment_status,omitempty"`
	Attributes            *string                `json:"attributes,omitempty"`
	DateCreated           *time.Time             `json:"date_created,omitempty"`
	DateUpdated           *time.Time             `json:"date_updated,omitempty"`
	Links                 map[string]interface{} `json:"links,omitempty"`
	Priority              *int64                 `json:"priority,omitempty"`
	Reason                *string                `json:"reason,omitempty"`
	Sid                   *string                `json:"sid,omitempty"`
	TaskChannelSid        *string                `json:"task_channel_sid,omitempty"`
	TaskChannelUniqueName *string                `json:"task_channel_unique_name,omitempty"`
	TaskQueueEnteredDate  *time.Time             `json:"task_queue_entered_date,omitempty"`
	TaskQueueFriendlyName *string                `json:"task_queue_friendly_name,omitempty"`
	TaskQueueSid          *string                `json:"task_queue_sid,omitempty"`
	Timeout               *int64                 `json:"timeout,omitempty"`
	URL                   *string                `json:"url,omitempty"`
	WorkflowFriendlyName  *string                `json:"workflow_friendly_name,omitempty"`
	WorkflowSid           *string                `json:"workflow_sid,omitempty"`
	WorkspaceSid          *string                `json:"workspace_sid,omitempty"`
}
