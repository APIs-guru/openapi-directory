package shared



type RecommendedRules struct {
    Results []RecommendedRule `json:"results,omitempty"`
    TimeRange *TimeRange `json:"time_range,omitempty"`
    
}

