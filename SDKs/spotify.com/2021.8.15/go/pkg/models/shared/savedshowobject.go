package shared

import (
	"time"
)

// SavedShowObject

// https://developer.spotify.com/documentation/web-api/reference/#object-savedshowobject - Find more info on the official Spotify Web API Reference
type SavedShowObject struct {
	AddedAt *time.Time            `json:"added_at,omitempty"`
	Show    *SimplifiedShowObject `json:"show,omitempty"`
}
