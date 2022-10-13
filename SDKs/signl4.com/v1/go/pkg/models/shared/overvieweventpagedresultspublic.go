package shared

type OverviewEventPagedResultsPublic struct {
	ContinuationToken *PagedResultsPublicContinuationToken `json:"continuationToken"`
	HasMore           *bool                                `json:"hasMore"`
	Results           []OverviewEvent                      `json:"results"`
}
