package shared

type OverviewAlertPagedResultsPublic struct {
	ContinuationToken *PagedResultsPublicContinuationToken `json:"continuationToken"`
	HasMore           *bool                                `json:"hasMore"`
	Results           []OverviewAlert                      `json:"results"`
}
