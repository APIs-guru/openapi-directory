package shared

// ErrorResponse
// Generic error response that returns one or more errors.
type ErrorResponse struct {
	Errors []ErrorObject `json:"errors"`
}
