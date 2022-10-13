package shared

type LabelResult struct {
	Label       *string  `json:"label"`
	Probability *float32 `json:"probability"`
}
