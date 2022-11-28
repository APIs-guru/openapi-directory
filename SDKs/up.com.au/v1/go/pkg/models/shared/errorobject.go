package shared

// ErrorObjectSource
// If applicable, location in the request that this error relates to. This
// may be a parameter in the query string, or a an attribute in the
// request body.
type ErrorObjectSource struct {
	Parameter *string `json:"parameter,omitempty"`
	Pointer   *string `json:"pointer,omitempty"`
}

// ErrorObject
// Provides information about an error processing a request.
type ErrorObject struct {
	Detail string             `json:"detail"`
	Source *ErrorObjectSource `json:"source,omitempty"`
	Status string             `json:"status"`
	Title  string             `json:"title"`
}
