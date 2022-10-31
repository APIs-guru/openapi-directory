package shared



type ElectionCandidate struct {
    MemberID *int32 `json:"memberId,omitempty"`
    Name *string `json:"name,omitempty"`
    Party *Party `json:"party,omitempty"`
    RankOrder *int32 `json:"rankOrder,omitempty"`
    ResultChange *string `json:"resultChange,omitempty"`
    VoteShare *float64 `json:"voteShare,omitempty"`
    Votes *int32 `json:"votes,omitempty"`
    
}

