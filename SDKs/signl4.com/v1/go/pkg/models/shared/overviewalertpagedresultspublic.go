package shared

type OverviewAlertPagedResultsPublic struct {
	ContinuationToken *PagedResultsPublicContinuationToken `json:"continuationToken,omitempty"`
	HasMore           *bool                                `json:"hasMore,omitempty"`
	Results           []OverviewAlert                      `json:"results,omitempty"`
}
