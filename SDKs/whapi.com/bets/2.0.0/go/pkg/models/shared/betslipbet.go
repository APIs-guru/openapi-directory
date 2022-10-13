package shared

type Betslipbet struct {
	BetMultiplier *float64        `json:"betMultiplier"`
	FreeBets      []FreeBetDetail `json:"freeBets"`
	Legs          []Betslipleg    `json:"legs"`
	MaxStake      *float64        `json:"maxStake"`
	MinStake      *float64        `json:"minStake"`
	NumLines      *float64        `json:"numLines"`
	Number        int64           `json:"number"`
	TypeCode      string          `json:"typeCode"`
	TypeName      *string         `json:"typeName"`
}
