package shared

type Betslipbet struct {
	BetMultiplier *float64        `json:"betMultiplier,omitempty"`
	FreeBets      []FreeBetDetail `json:"freeBets,omitempty"`
	Legs          []Betslipleg    `json:"legs"`
	MaxStake      *float64        `json:"maxStake,omitempty"`
	MinStake      *float64        `json:"minStake,omitempty"`
	NumLines      *float64        `json:"numLines,omitempty"`
	Number        int64           `json:"number"`
	TypeCode      string          `json:"typeCode"`
	TypeName      *string         `json:"typeName,omitempty"`
}
