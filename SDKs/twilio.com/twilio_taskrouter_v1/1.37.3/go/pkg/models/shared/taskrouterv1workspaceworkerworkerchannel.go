package shared

import (
	"time"
)

type TaskrouterV1WorkspaceWorkerWorkerChannel struct {
	AccountSid                  *string    `json:"account_sid,omitempty"`
	AssignedTasks               *int64     `json:"assigned_tasks,omitempty"`
	Available                   *bool      `json:"available,omitempty"`
	AvailableCapacityPercentage *int64     `json:"available_capacity_percentage,omitempty"`
	ConfiguredCapacity          *int64     `json:"configured_capacity,omitempty"`
	DateCreated                 *time.Time `json:"date_created,omitempty"`
	DateUpdated                 *time.Time `json:"date_updated,omitempty"`
	Sid                         *string    `json:"sid,omitempty"`
	TaskChannelSid              *string    `json:"task_channel_sid,omitempty"`
	TaskChannelUniqueName       *string    `json:"task_channel_unique_name,omitempty"`
	URL                         *string    `json:"url,omitempty"`
	WorkerSid                   *string    `json:"worker_sid,omitempty"`
	WorkspaceSid                *string    `json:"workspace_sid,omitempty"`
}
