package shared

type ElectionCandidate struct {
	MemberID     *int32   `json:"memberId"`
	Name         *string  `json:"name"`
	Party        *Party   `json:"party"`
	RankOrder    *int32   `json:"rankOrder"`
	ResultChange *string  `json:"resultChange"`
	VoteShare    *float64 `json:"voteShare"`
	Votes        *int32   `json:"votes"`
}
