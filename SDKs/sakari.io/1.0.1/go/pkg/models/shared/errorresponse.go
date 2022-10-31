package shared

type ErrorResponseError struct {
	Code    *string `json:"code,omitempty"`
	Message *string `json:"message,omitempty"`
}

type ErrorResponse struct {
	Error   *ErrorResponseError `json:"error,omitempty"`
	Success *bool               `json:"success,omitempty"`
}
