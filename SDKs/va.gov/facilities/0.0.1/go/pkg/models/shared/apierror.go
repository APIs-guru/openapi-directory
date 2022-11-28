package shared

// APIError
// API invocation or processing error
type APIError struct {
	Errors []ErrorMessage `json:"errors"`
}
