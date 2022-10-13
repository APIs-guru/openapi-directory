package shared

type BetPlaced struct {
	ID             *string  `json:"id"`
	NumLines       *int64   `json:"numLines"`
	Number         *float64 `json:"number"`
	PlacedDateTime *string  `json:"placedDateTime"`
	Receipt        string   `json:"receipt"`
	TotalStake     *float64 `json:"totalStake"`
}
