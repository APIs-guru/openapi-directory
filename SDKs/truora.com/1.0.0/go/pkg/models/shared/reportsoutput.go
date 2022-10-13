package shared

type ReportsOutput struct {
	Next    *string  `json:"next"`
	Reports []Report `json:"reports"`
	Self    string   `json:"self"`
}
