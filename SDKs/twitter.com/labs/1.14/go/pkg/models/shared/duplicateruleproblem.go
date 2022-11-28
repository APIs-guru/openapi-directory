package shared

// DuplicateRuleProblem
// The rule you have submitted is a duplicate.
type DuplicateRuleProblem struct {
	Detail string `json:"detail"`
	Title  string `json:"title"`
	Type   string `json:"type"`
}
