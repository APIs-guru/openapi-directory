package shared

type TaskrouterV1WorkspaceTaskQueueTaskQueuesStatistics struct {
	AccountSid   *string      `json:"account_sid"`
	Cumulative   *interface{} `json:"cumulative"`
	Realtime     *interface{} `json:"realtime"`
	TaskQueueSid *string      `json:"task_queue_sid"`
	WorkspaceSid *string      `json:"workspace_sid"`
}
