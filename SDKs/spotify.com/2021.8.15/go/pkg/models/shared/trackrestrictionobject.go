package shared

// TrackRestrictionObject

// https://developer.spotify.com/documentation/web-api/reference/#object-trackrestrictionobject - Find more info on the official Spotify Web API Reference
type TrackRestrictionObject struct {
	Reason *string `json:"reason,omitempty"`
}
