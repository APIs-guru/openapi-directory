package shared

type MatchAlliance struct {
	DqTeamKeys        []string `json:"dq_team_keys"`
	Score             int64    `json:"score"`
	SurrogateTeamKeys []string `json:"surrogate_team_keys"`
	TeamKeys          []string `json:"team_keys"`
}
