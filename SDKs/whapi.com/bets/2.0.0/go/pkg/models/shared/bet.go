package shared

type Bet struct {
	DelayedBetID *string `json:"delayedBetId"`
	FreeBetID    *string `json:"freeBetId"`
	Legs         []Leg   `json:"legs"`
	Number       int64   `json:"number"`
	Stake        float64 `json:"stake"`
	TypeCode     string  `json:"typeCode"`
}
