package shared

type OcrResult struct {
	Attributes  *Attributes  `json:"attributes,omitempty"`
	BoundingBox *BoundingBox `json:"boundingBox,omitempty"`
	Label       *string      `json:"label,omitempty"`
	Probability *float32     `json:"probability,omitempty"`
}
