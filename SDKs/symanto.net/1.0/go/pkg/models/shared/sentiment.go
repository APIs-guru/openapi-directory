package shared

type Sentiment struct {
	Category       *string  `json:"category,omitempty"`
	End            *int32   `json:"end,omitempty"`
	NegationTerm   *string  `json:"negationTerm,omitempty"`
	ParentCategory *string  `json:"parentCategory,omitempty"`
	Positive       *bool    `json:"positive,omitempty"`
	Scale          *float64 `json:"scale,omitempty"`
	Start          *int32   `json:"start,omitempty"`
	Text           *string  `json:"text,omitempty"`
}
