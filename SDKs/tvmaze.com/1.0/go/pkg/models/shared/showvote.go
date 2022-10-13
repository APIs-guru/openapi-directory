package shared

type ShowVote struct {
	ShowID  *int64 `json:"show_id"`
	Vote    *int64 `json:"vote"`
	VotedAt *int64 `json:"voted_at"`
}
