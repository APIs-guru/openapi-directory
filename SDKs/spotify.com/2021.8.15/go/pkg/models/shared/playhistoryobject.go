package shared

import (
	"time"
)

// PlayHistoryObject

// https://developer.spotify.com/documentation/web-api/reference/#object-playhistoryobject - Find more info on the official Spotify Web API Reference
type PlayHistoryObject struct {
	Context  *ContextObject         `json:"context,omitempty"`
	PlayedAt *time.Time             `json:"played_at,omitempty"`
	Track    *SimplifiedTrackObject `json:"track,omitempty"`
}
