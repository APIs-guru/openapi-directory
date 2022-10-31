package shared

type BetSlipRequest struct {
	Legs []Leg `json:"legs,omitempty"`
}
