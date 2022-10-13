package shared

type OcrResult struct {
	Attributes  *Attributes  `json:"attributes"`
	BoundingBox *BoundingBox `json:"boundingBox"`
	Label       *string      `json:"label"`
	Probability *float32     `json:"probability"`
}
