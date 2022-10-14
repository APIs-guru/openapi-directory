package shared

type MembersInterests struct {
	InterestCategories []RegisteredInterestCategory `json:"interestCategories,omitempty"`
	Member             *Member                      `json:"member,omitempty"`
}
