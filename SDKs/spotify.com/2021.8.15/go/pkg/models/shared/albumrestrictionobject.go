package shared

// AlbumRestrictionObject

// https://developer.spotify.com/documentation/web-api/reference/#object-albumrestrictionobject - Find more info on the official Spotify Web API Reference
type AlbumRestrictionObject struct {
	Reason *string `json:"reason,omitempty"`
}
