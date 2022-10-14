package shared

type TaskrouterV1WorkspaceWorkspaceRealTimeStatistics struct {
	AccountSid            *string       `json:"account_sid,omitempty"`
	ActivityStatistics    []interface{} `json:"activity_statistics,omitempty"`
	LongestTaskWaitingAge *int64        `json:"longest_task_waiting_age,omitempty"`
	LongestTaskWaitingSid *string       `json:"longest_task_waiting_sid,omitempty"`
	TasksByPriority       *interface{}  `json:"tasks_by_priority,omitempty"`
	TasksByStatus         *interface{}  `json:"tasks_by_status,omitempty"`
	TotalTasks            *int64        `json:"total_tasks,omitempty"`
	TotalWorkers          *int64        `json:"total_workers,omitempty"`
	URL                   *string       `json:"url,omitempty"`
	WorkspaceSid          *string       `json:"workspace_sid,omitempty"`
}
