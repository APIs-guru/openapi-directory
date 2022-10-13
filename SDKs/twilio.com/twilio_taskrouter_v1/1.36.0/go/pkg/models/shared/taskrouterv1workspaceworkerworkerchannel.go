package shared

import (
	"time"
)

type TaskrouterV1WorkspaceWorkerWorkerChannel struct {
	AccountSid                  *string    `json:"account_sid"`
	AssignedTasks               *int64     `json:"assigned_tasks"`
	Available                   *bool      `json:"available"`
	AvailableCapacityPercentage *int64     `json:"available_capacity_percentage"`
	ConfiguredCapacity          *int64     `json:"configured_capacity"`
	DateCreated                 *time.Time `json:"date_created"`
	DateUpdated                 *time.Time `json:"date_updated"`
	Sid                         *string    `json:"sid"`
	TaskChannelSid              *string    `json:"task_channel_sid"`
	TaskChannelUniqueName       *string    `json:"task_channel_unique_name"`
	URL                         *string    `json:"url"`
	WorkerSid                   *string    `json:"worker_sid"`
	WorkspaceSid                *string    `json:"workspace_sid"`
}
