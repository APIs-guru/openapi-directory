package shared

type InvalidRequestProblemErrors struct {
	Message    *string             `json:"message"`
	Parameters map[string][]string `json:"parameters"`
}

type InvalidRequestProblem struct {
	Detail string                        `json:"detail"`
	Errors []InvalidRequestProblemErrors `json:"errors"`
	Title  string                        `json:"title"`
	Type   string                        `json:"type"`
}
