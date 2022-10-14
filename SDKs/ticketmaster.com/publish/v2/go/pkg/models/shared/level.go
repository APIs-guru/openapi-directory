package shared

type Level struct {
	ID    *string           `json:"id,omitempty"`
	Names map[string]string `json:"names,omitempty"`
}
