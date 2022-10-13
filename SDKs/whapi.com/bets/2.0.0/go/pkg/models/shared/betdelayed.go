package shared

type BetDelayed struct {
	DelayPeriodSeconds int64    `json:"delayPeriodSeconds"`
	DelayedBetID       string   `json:"delayedBetId"`
	ID                 string   `json:"id"`
	Number             *float64 `json:"number"`
}
