package shared

type ErrorResponseError struct {
	Code    *int64  `json:"code,omitempty"`
	Message *string `json:"message,omitempty"`
}

type ErrorResponse struct {
	Error   ErrorResponseError `json:"error"`
	Success bool               `json:"success"`
}
