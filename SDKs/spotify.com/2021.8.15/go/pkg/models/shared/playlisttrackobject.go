package shared

import (
	"time"
)

// PlaylistTrackObject

// https://developer.spotify.com/documentation/web-api/reference/#object-playlisttrackobject - Find more info on the official Spotify Web API Reference
type PlaylistTrackObject struct {
	AddedAt *time.Time        `json:"added_at,omitempty"`
	AddedBy *PublicUserObject `json:"added_by,omitempty"`
	IsLocal *bool             `json:"is_local,omitempty"`
	Track   *interface{}      `json:"track,omitempty"`
}
