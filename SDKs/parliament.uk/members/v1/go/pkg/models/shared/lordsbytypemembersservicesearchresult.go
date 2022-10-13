package shared

type LordsByTypeMembersServiceSearchResult struct {
	Items         []LordsByTypeItem `json:"items"`
	Links         []Link            `json:"links"`
	ResultContext *string           `json:"resultContext"`
	Skip          *int32            `json:"skip"`
	Take          *int32            `json:"take"`
	TotalResults  *int32            `json:"totalResults"`
}
