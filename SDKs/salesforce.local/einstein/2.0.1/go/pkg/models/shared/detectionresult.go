package shared

type DetectionResult struct {
	BoundingBox *BoundingBox `json:"boundingBox"`
	Label       *string      `json:"label"`
	Probability *float32     `json:"probability"`
}
