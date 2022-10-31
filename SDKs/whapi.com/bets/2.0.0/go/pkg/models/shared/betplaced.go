package shared

type BetPlaced struct {
	ID             *string  `json:"id,omitempty"`
	NumLines       *int64   `json:"numLines,omitempty"`
	Number         *float64 `json:"number,omitempty"`
	PlacedDateTime *string  `json:"placedDateTime,omitempty"`
	Receipt        string   `json:"receipt"`
	TotalStake     *float64 `json:"totalStake,omitempty"`
}
