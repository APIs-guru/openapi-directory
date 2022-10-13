package shared

type ConstituencyMembersServiceSearchResult struct {
	Items         []ConstituencyItem `json:"items"`
	Links         []Link             `json:"links"`
	ResultContext *string            `json:"resultContext"`
	Skip          *int32             `json:"skip"`
	Take          *int32             `json:"take"`
	TotalResults  *int32             `json:"totalResults"`
}
