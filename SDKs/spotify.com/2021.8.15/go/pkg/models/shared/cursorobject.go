package shared

// CursorObject

// https://developer.spotify.com/documentation/web-api/reference/#object-cursorobject - Find more info on the official Spotify Web API Reference
type CursorObject struct {
	After *string `json:"after,omitempty"`
}
