package shared

type InvalidRequestProblemErrors struct {
	Message    *string             `json:"message,omitempty"`
	Parameters map[string][]string `json:"parameters,omitempty"`
}

type InvalidRequestProblem struct {
	Detail string                        `json:"detail"`
	Errors []InvalidRequestProblemErrors `json:"errors,omitempty"`
	Title  string                        `json:"title"`
	Type   string                        `json:"type"`
}
