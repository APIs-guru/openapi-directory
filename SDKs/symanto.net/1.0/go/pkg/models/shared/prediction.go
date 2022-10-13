package shared

type Prediction struct {
	Prediction  string  `json:"prediction"`
	Probability float64 `json:"probability"`
}
