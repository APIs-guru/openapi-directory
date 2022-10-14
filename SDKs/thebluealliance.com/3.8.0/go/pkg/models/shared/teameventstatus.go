package shared

type TeamEventStatus struct {
	Alliance          *TeamEventStatusAlliance `json:"alliance,omitempty"`
	AllianceStatusStr *string                  `json:"alliance_status_str,omitempty"`
	LastMatchKey      *string                  `json:"last_match_key,omitempty"`
	NextMatchKey      *string                  `json:"next_match_key,omitempty"`
	OverallStatusStr  *string                  `json:"overall_status_str,omitempty"`
	Playoff           *TeamEventStatusPlayoff  `json:"playoff,omitempty"`
	PlayoffStatusStr  *string                  `json:"playoff_status_str,omitempty"`
	Qual              *TeamEventStatusRank     `json:"qual,omitempty"`
}
