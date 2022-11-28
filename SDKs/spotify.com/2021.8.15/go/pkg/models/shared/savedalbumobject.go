package shared

import (
	"time"
)

// SavedAlbumObject

// https://developer.spotify.com/documentation/web-api/reference/#object-savedalbumobject - Find more info on the official Spotify Web API Reference
type SavedAlbumObject struct {
	AddedAt *time.Time   `json:"added_at,omitempty"`
	Album   *AlbumObject `json:"album,omitempty"`
}
