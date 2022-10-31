package shared



type MatchAlliance struct {
    DqTeamKeys []string `json:"dq_team_keys,omitempty"`
    Score int64 `json:"score"`
    SurrogateTeamKeys []string `json:"surrogate_team_keys,omitempty"`
    TeamKeys []string `json:"team_keys"`
    
}

