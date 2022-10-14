package shared

type RegisteredInterestCategory struct {
	Interests []RegisteredInterest `json:"interests,omitempty"`
	Name      *string              `json:"name,omitempty"`
	SortOrder *int32               `json:"sortOrder,omitempty"`
}
