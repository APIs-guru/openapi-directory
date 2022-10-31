package shared



type MarkedEpisodeEmbedded struct {
    Episode map[string]interface{} `json:"episode,omitempty"`
    
}

type MarkedEpisode struct {
    Embedded *MarkedEpisodeEmbedded `json:"_embedded,omitempty"`
    EpisodeID *int64 `json:"episode_id,omitempty"`
    MarkedAt *int64 `json:"marked_at,omitempty"`
    Type *interface{} `json:"type,omitempty"`
    
}

