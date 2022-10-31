package shared

type EntityObject struct {
	BoundingBox *BoundingBox `json:"boundingBox,omitempty"`
	Entity      *string      `json:"entity,omitempty"`
	Text        *string      `json:"text,omitempty"`
}
