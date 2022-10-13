package shared

type Sentiment struct {
	Category       *string  `json:"category"`
	End            *int32   `json:"end"`
	NegationTerm   *string  `json:"negationTerm"`
	ParentCategory *string  `json:"parentCategory"`
	Positive       *bool    `json:"positive"`
	Scale          *float64 `json:"scale"`
	Start          *int32   `json:"start"`
	Text           *string  `json:"text"`
}
