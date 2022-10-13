package shared

type RecommendedRules struct {
	Results   []RecommendedRule `json:"results"`
	TimeRange *TimeRange        `json:"time_range"`
}
