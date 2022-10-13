package shared

type EntityObject struct {
	BoundingBox *BoundingBox `json:"boundingBox"`
	Entity      *string      `json:"entity"`
	Text        *string      `json:"text"`
}
