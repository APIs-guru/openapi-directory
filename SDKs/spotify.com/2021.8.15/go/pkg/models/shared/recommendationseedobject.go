package shared

type RecommendationSeedObject struct {
	AfterFilteringSize *int32  `json:"afterFilteringSize"`
	AfterRelinkingSize *int32  `json:"afterRelinkingSize"`
	Href               *string `json:"href"`
	ID                 *string `json:"id"`
	InitialPoolSize    *int32  `json:"initialPoolSize"`
	Type               *string `json:"type"`
}
