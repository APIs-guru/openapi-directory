package shared

type TaskrouterV1WorkspaceWorkerWorkerStatistics struct {
	AccountSid   *string      `json:"account_sid"`
	Cumulative   *interface{} `json:"cumulative"`
	Realtime     *interface{} `json:"realtime"`
	URL          *string      `json:"url"`
	WorkspaceSid *string      `json:"workspace_sid"`
}
