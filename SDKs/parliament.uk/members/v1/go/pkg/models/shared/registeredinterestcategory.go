package shared

type RegisteredInterestCategory struct {
	Interests []RegisteredInterest `json:"interests"`
	Name      *string              `json:"name"`
	SortOrder *int32               `json:"sortOrder"`
}
