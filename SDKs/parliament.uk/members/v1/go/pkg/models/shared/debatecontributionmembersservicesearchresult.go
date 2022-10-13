package shared

type DebateContributionMembersServiceSearchResult struct {
	Items         []DebateContributionItem `json:"items"`
	Links         []Link                   `json:"links"`
	ResultContext *string                  `json:"resultContext"`
	Skip          *int32                   `json:"skip"`
	Take          *int32                   `json:"take"`
	TotalResults  *int32                   `json:"totalResults"`
}
