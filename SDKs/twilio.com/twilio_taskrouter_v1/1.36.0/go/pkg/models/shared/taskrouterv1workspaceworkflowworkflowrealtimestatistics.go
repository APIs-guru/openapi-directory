package shared



type TaskrouterV1WorkspaceWorkflowWorkflowRealTimeStatistics struct {
    AccountSid *string `json:"account_sid,omitempty"`
    LongestTaskWaitingAge *int64 `json:"longest_task_waiting_age,omitempty"`
    LongestTaskWaitingSid *string `json:"longest_task_waiting_sid,omitempty"`
    TasksByPriority *interface{} `json:"tasks_by_priority,omitempty"`
    TasksByStatus *interface{} `json:"tasks_by_status,omitempty"`
    TotalTasks *int64 `json:"total_tasks,omitempty"`
    URL *string `json:"url,omitempty"`
    WorkflowSid *string `json:"workflow_sid,omitempty"`
    WorkspaceSid *string `json:"workspace_sid,omitempty"`
    
}

