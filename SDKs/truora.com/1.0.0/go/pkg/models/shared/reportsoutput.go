package shared

// ReportsOutput
// Represents the result of report searches
type ReportsOutput struct {
	Next    *string  `json:"next,omitempty"`
	Reports []Report `json:"reports"`
	Self    string   `json:"self"`
}
