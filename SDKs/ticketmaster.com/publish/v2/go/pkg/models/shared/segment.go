package shared

type Segment struct {
	ID    *string           `json:"id"`
	Names map[string]string `json:"names"`
}
