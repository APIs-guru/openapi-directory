package shared

type MarkedEpisodeEmbedded struct {
	Episode map[string]interface{} `json:"episode"`
}

type MarkedEpisode struct {
	Embedded  *MarkedEpisodeEmbedded `json:"_embedded"`
	EpisodeID *int64                 `json:"episode_id"`
	MarkedAt  *int64                 `json:"marked_at"`
	Type      *interface{}           `json:"type"`
}
