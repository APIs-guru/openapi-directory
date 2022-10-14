package shared

type Leg struct {
	Parts []Part  `json:"parts"`
	Sort  *string `json:"sort,omitempty"`
	Type  string  `json:"type"`
}
