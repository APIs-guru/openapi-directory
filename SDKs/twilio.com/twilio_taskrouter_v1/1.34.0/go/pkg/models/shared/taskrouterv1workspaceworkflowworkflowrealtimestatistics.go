package shared

type TaskrouterV1WorkspaceWorkflowWorkflowRealTimeStatistics struct {
	AccountSid            *string      `json:"account_sid"`
	LongestTaskWaitingAge *int64       `json:"longest_task_waiting_age"`
	LongestTaskWaitingSid *string      `json:"longest_task_waiting_sid"`
	TasksByPriority       *interface{} `json:"tasks_by_priority"`
	TasksByStatus         *interface{} `json:"tasks_by_status"`
	TotalTasks            *int64       `json:"total_tasks"`
	URL                   *string      `json:"url"`
	WorkflowSid           *string      `json:"workflow_sid"`
	WorkspaceSid          *string      `json:"workspace_sid"`
}
