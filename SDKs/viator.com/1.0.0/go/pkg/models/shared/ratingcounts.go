package shared

type RatingCounts struct {
	One   *float64 `json:"1,omitempty"`
	Two   *float64 `json:"2,omitempty"`
	Three *float64 `json:"3,omitempty"`
	Four  *float64 `json:"4,omitempty"`
	Five  *float64 `json:"5,omitempty"`
}
