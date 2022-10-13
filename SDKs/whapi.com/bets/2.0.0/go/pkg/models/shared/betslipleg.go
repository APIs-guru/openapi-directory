package shared

type Betslipleg struct {
	Parts []Betslippart `json:"parts"`
	Sort  *string       `json:"sort"`
	Type  string        `json:"type"`
}
