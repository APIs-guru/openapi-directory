package shared

type TimeIntervalObject struct {
	Confidence *float64 `json:"confidence"`
	Duration   *float64 `json:"duration"`
	Start      *float64 `json:"start"`
}
