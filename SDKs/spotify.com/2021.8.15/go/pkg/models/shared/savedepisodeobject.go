package shared

import (
	"time"
)

// SavedEpisodeObject

// https://developer.spotify.com/documentation/web-api/reference/#object-savedepisodeobject - Find more info on the official Spotify Web API Reference
type SavedEpisodeObject struct {
	AddedAt *time.Time     `json:"added_at,omitempty"`
	Episode *EpisodeObject `json:"episode,omitempty"`
}
