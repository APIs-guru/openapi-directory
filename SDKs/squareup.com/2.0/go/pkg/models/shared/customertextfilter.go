package shared

type CustomerTextFilter struct {
	Exact *string `json:"exact,omitempty"`
	Fuzzy *string `json:"fuzzy,omitempty"`
}
