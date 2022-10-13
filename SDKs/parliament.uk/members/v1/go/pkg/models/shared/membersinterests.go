package shared

type MembersInterests struct {
	InterestCategories []RegisteredInterestCategory `json:"interestCategories"`
	Member             *Member                      `json:"member"`
}
