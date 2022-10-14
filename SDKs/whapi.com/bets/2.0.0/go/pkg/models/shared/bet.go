package shared

type Bet struct {
	DelayedBetID *string `json:"delayedBetId,omitempty"`
	FreeBetID    *string `json:"freeBetId,omitempty"`
	Legs         []Leg   `json:"legs"`
	Number       int64   `json:"number"`
	Stake        float64 `json:"stake"`
	TypeCode     string  `json:"typeCode"`
}
