package shared

type TaskrouterV1WorkspaceWorkspaceRealTimeStatistics struct {
	AccountSid            *string       `json:"account_sid"`
	ActivityStatistics    []interface{} `json:"activity_statistics"`
	LongestTaskWaitingAge *int64        `json:"longest_task_waiting_age"`
	LongestTaskWaitingSid *string       `json:"longest_task_waiting_sid"`
	TasksByPriority       *interface{}  `json:"tasks_by_priority"`
	TasksByStatus         *interface{}  `json:"tasks_by_status"`
	TotalTasks            *int64        `json:"total_tasks"`
	TotalWorkers          *int64        `json:"total_workers"`
	URL                   *string       `json:"url"`
	WorkspaceSid          *string       `json:"workspace_sid"`
}
