package shared

// ClientDisconnectedProblem
// Your client has gone away.
type ClientDisconnectedProblem struct {
	Detail string `json:"detail"`
	Title  string `json:"title"`
	Type   string `json:"type"`
}
