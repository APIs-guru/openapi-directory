package shared

type Segment struct {
	ID    *string           `json:"id,omitempty"`
	Names map[string]string `json:"names,omitempty"`
}
