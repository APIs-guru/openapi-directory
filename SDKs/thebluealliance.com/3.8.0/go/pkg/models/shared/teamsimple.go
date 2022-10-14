package shared

type TeamSimple struct {
	City       *string `json:"city,omitempty"`
	Country    *string `json:"country,omitempty"`
	Key        string  `json:"key"`
	Name       string  `json:"name"`
	Nickname   *string `json:"nickname,omitempty"`
	StateProv  *string `json:"state_prov,omitempty"`
	TeamNumber int64   `json:"team_number"`
}
