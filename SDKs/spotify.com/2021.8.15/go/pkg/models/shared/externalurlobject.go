package shared

// ExternalURLObject

// https://developer.spotify.com/documentation/web-api/reference/#object-externalurlobject - Find more info on the official Spotify Web API Reference
type ExternalURLObject struct {
	Spotify *string `json:"spotify,omitempty"`
}
