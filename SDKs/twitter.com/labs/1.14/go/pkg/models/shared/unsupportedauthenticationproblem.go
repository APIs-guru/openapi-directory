package shared

// UnsupportedAuthenticationProblem
// A problem that indicates that the authentication used is not supported.
type UnsupportedAuthenticationProblem struct {
	Detail string `json:"detail"`
	Title  string `json:"title"`
	Type   string `json:"type"`
}
