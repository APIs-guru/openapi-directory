package shared

// WltRecord
// A Win-Loss-Tie record for a team, or an alliance.
type WltRecord struct {
	Losses int64 `json:"losses"`
	Ties   int64 `json:"ties"`
	Wins   int64 `json:"wins"`
}
