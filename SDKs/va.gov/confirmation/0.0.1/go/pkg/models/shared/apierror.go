package shared

type APIErrorErrors struct {
	Code   *string `json:"code,omitempty"`
	Detail *string `json:"detail,omitempty"`
	Status *string `json:"status,omitempty"`
	Title  *string `json:"title,omitempty"`
}

// APIError
// API invocation or processing error
type APIError struct {
	Errors []APIErrorErrors `json:"errors,omitempty"`
}
