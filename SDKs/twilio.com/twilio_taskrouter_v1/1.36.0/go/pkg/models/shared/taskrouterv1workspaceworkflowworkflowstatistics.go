package shared

type TaskrouterV1WorkspaceWorkflowWorkflowStatistics struct {
	AccountSid   *string      `json:"account_sid,omitempty"`
	Cumulative   *interface{} `json:"cumulative,omitempty"`
	Realtime     *interface{} `json:"realtime,omitempty"`
	URL          *string      `json:"url,omitempty"`
	WorkflowSid  *string      `json:"workflow_sid,omitempty"`
	WorkspaceSid *string      `json:"workspace_sid,omitempty"`
}
