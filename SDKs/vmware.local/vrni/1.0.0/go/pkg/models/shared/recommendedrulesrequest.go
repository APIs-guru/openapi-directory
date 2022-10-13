package shared

type RecommendedRulesRequest struct {
	Group1    *MicroSecGroup `json:"group_1"`
	Group2    *MicroSecGroup `json:"group_2"`
	TimeRange *TimeRange     `json:"time_range"`
}
