package shared

type TaskrouterV1WorkspaceWorkflowWorkflowStatistics struct {
	AccountSid   *string      `json:"account_sid"`
	Cumulative   *interface{} `json:"cumulative"`
	Realtime     *interface{} `json:"realtime"`
	URL          *string      `json:"url"`
	WorkflowSid  *string      `json:"workflow_sid"`
	WorkspaceSid *string      `json:"workspace_sid"`
}
