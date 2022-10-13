package shared

type ErrorResponseError struct {
	Code    *string `json:"code"`
	Message *string `json:"message"`
}

type ErrorResponse struct {
	Error   *ErrorResponseError `json:"error"`
	Success *bool               `json:"success"`
}
