package shared

type RecommendationsObject struct {
	Seeds  []RecommendationSeedObject `json:"seeds"`
	Tracks []TrackObject              `json:"tracks"`
}
