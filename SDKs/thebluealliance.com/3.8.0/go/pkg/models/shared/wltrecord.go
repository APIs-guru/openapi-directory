package shared

type WltRecord struct {
	Losses int64 `json:"losses"`
	Ties   int64 `json:"ties"`
	Wins   int64 `json:"wins"`
}
