package shared

type TaskrouterV1WorkspaceWorkerWorkersRealTimeStatistics struct {
	AccountSid         *string       `json:"account_sid"`
	ActivityStatistics []interface{} `json:"activity_statistics"`
	TotalWorkers       *int64        `json:"total_workers"`
	URL                *string       `json:"url"`
	WorkspaceSid       *string       `json:"workspace_sid"`
}
