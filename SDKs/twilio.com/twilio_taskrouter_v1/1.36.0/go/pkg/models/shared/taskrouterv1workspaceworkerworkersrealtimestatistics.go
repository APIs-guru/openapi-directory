package shared

type TaskrouterV1WorkspaceWorkerWorkersRealTimeStatistics struct {
	AccountSid         *string       `json:"account_sid,omitempty"`
	ActivityStatistics []interface{} `json:"activity_statistics,omitempty"`
	TotalWorkers       *int64        `json:"total_workers,omitempty"`
	URL                *string       `json:"url,omitempty"`
	WorkspaceSid       *string       `json:"workspace_sid,omitempty"`
}
