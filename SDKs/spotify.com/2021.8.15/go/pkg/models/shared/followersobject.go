package shared

// FollowersObject

// https://developer.spotify.com/documentation/web-api/reference/#object-followersobject - Find more info on the official Spotify Web API Reference
type FollowersObject struct {
	Href  *string `json:"href,omitempty"`
	Total *int32  `json:"total,omitempty"`
}
