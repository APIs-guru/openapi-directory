package shared

// EpisodeRestrictionObject

// https://developer.spotify.com/documentation/web-api/reference/#object-episoderestrictionobject - Find more info on the official Spotify Web API Reference
type EpisodeRestrictionObject struct {
	Reason *string `json:"reason,omitempty"`
}
