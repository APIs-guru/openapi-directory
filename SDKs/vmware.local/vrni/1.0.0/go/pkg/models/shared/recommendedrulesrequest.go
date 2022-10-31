package shared



type RecommendedRulesRequest struct {
    Group1 *MicroSecGroup `json:"group_1,omitempty"`
    Group2 *MicroSecGroup `json:"group_2,omitempty"`
    TimeRange *TimeRange `json:"time_range,omitempty"`
    
}

