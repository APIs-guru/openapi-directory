package shared



type RecommendationsObject struct {
    Seeds []RecommendationSeedObject `json:"seeds,omitempty"`
    Tracks []TrackObject `json:"tracks,omitempty"`
    
}

