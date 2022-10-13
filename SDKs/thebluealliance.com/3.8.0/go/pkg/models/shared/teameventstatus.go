package shared

type TeamEventStatus struct {
	Alliance          *TeamEventStatusAlliance `json:"alliance"`
	AllianceStatusStr *string                  `json:"alliance_status_str"`
	LastMatchKey      *string                  `json:"last_match_key"`
	NextMatchKey      *string                  `json:"next_match_key"`
	OverallStatusStr  *string                  `json:"overall_status_str"`
	Playoff           *TeamEventStatusPlayoff  `json:"playoff"`
	PlayoffStatusStr  *string                  `json:"playoff_status_str"`
	Qual              *TeamEventStatusRank     `json:"qual"`
}
