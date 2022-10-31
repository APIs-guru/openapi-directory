package shared

type OverviewEventPagedResultsPublic struct {
	ContinuationToken *PagedResultsPublicContinuationToken `json:"continuationToken,omitempty"`
	HasMore           *bool                                `json:"hasMore,omitempty"`
	Results           []OverviewEvent                      `json:"results,omitempty"`
}
