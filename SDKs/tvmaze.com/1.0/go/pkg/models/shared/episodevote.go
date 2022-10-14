package shared

type EpisodeVote struct {
	EpisodeID *int64 `json:"episode_id,omitempty"`
	Vote      *int64 `json:"vote,omitempty"`
	VotedAt   *int64 `json:"voted_at,omitempty"`
}
