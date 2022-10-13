package shared

type TeamSimple struct {
	City       *string `json:"city"`
	Country    *string `json:"country"`
	Key        string  `json:"key"`
	Name       string  `json:"name"`
	Nickname   *string `json:"nickname"`
	StateProv  *string `json:"state_prov"`
	TeamNumber int64   `json:"team_number"`
}
