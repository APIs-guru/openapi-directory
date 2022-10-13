package shared

type Leg struct {
	Parts []Part  `json:"parts"`
	Sort  *string `json:"sort"`
	Type  string  `json:"type"`
}
