package shared

type ZebraTeam struct {
	TeamKey string    `json:"team_key"`
	Xs      []float64 `json:"xs"`
	Ys      []float64 `json:"ys"`
}
