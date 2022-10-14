package shared

type LabelResult struct {
	Label       *string  `json:"label,omitempty"`
	Probability *float32 `json:"probability,omitempty"`
}
