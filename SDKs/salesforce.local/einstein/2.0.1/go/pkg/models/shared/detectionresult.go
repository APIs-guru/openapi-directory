package shared

type DetectionResult struct {
	BoundingBox *BoundingBox `json:"boundingBox,omitempty"`
	Label       *string      `json:"label,omitempty"`
	Probability *float32     `json:"probability,omitempty"`
}
