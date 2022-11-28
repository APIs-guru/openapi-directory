package shared

// RulesCapProblem
// You have exceeded the maximum number of rules.
type RulesCapProblem struct {
	Detail string `json:"detail"`
	Title  string `json:"title"`
	Type   string `json:"type"`
}
