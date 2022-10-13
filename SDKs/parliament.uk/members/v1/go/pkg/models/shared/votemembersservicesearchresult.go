package shared

type VoteMembersServiceSearchResult struct {
	Items         []VoteItem `json:"items"`
	Links         []Link     `json:"links"`
	ResultContext *string    `json:"resultContext"`
	Skip          *int32     `json:"skip"`
	Take          *int32     `json:"take"`
	TotalResults  *int32     `json:"totalResults"`
}
