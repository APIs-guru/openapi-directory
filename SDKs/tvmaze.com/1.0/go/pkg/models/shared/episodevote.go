package shared

type EpisodeVote struct {
	EpisodeID *int64 `json:"episode_id"`
	Vote      *int64 `json:"vote"`
	VotedAt   *int64 `json:"voted_at"`
}
