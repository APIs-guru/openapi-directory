package shared

type TaskrouterV1WorkspaceTaskQueueTaskQueueStatistics struct {
	AccountSid   *string      `json:"account_sid"`
	Cumulative   *interface{} `json:"cumulative"`
	Realtime     *interface{} `json:"realtime"`
	TaskQueueSid *string      `json:"task_queue_sid"`
	URL          *string      `json:"url"`
	WorkspaceSid *string      `json:"workspace_sid"`
}
