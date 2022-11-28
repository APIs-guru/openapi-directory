package shared

// InvalidRuleProblem
// The rule you have submitted is invalid.
type InvalidRuleProblem struct {
	Detail string `json:"detail"`
	Title  string `json:"title"`
	Type   string `json:"type"`
}
