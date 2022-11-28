package shared

// RecommendationsObject

// https://developer.spotify.com/documentation/web-api/reference/#object-recommendationsobject - Find more info on the official Spotify Web API Reference
type RecommendationsObject struct {
	Seeds  []RecommendationSeedObject `json:"seeds,omitempty"`
	Tracks []TrackObject              `json:"tracks,omitempty"`
}
