package shared

// RecommendationSeedObject

// https://developer.spotify.com/documentation/web-api/reference/#object-recommendationseedobject - Find more info on the official Spotify Web API Reference
type RecommendationSeedObject struct {
	AfterFilteringSize *int32  `json:"afterFilteringSize,omitempty"`
	AfterRelinkingSize *int32  `json:"afterRelinkingSize,omitempty"`
	Href               *string `json:"href,omitempty"`
	ID                 *string `json:"id,omitempty"`
	InitialPoolSize    *int32  `json:"initialPoolSize,omitempty"`
	Type               *string `json:"type,omitempty"`
}
