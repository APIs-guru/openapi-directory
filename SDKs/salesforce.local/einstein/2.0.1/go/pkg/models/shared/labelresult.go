package shared

// LabelResult
// label
type LabelResult struct {
	Label       *string  `json:"label,omitempty"`
	Probability *float32 `json:"probability,omitempty"`
}
