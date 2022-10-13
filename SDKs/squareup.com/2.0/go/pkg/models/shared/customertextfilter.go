package shared

type CustomerTextFilter struct {
	Exact *string `json:"exact"`
	Fuzzy *string `json:"fuzzy"`
}
