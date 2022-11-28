package shared

import (
	"time"
)

// SavedTrackObject

// https://developer.spotify.com/documentation/web-api/reference/#object-savedtrackobject - Find more info on the official Spotify Web API Reference
type SavedTrackObject struct {
	AddedAt *time.Time   `json:"added_at,omitempty"`
	Track   *TrackObject `json:"track,omitempty"`
}
