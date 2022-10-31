package shared

type Betslipleg struct {
	Parts []Betslippart `json:"parts"`
	Sort  *string       `json:"sort,omitempty"`
	Type  string        `json:"type"`
}
