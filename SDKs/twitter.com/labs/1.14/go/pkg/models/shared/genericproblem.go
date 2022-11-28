package shared

// GenericProblem
// A generic problem with no additional information beyond that provided by the HTTP status code.
type GenericProblem struct {
	Detail string `json:"detail"`
	Status int64  `json:"status"`
	Title  string `json:"title"`
	Type   string `json:"type"`
}
