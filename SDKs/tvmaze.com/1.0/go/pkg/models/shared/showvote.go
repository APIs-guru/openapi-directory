package shared

type ShowVoteInput struct {
	Vote *int64 `json:"vote,omitempty"`
}

type ShowVote struct {
	ShowID  *int64 `json:"show_id,omitempty"`
	Vote    *int64 `json:"vote,omitempty"`
	VotedAt *int64 `json:"voted_at,omitempty"`
}
