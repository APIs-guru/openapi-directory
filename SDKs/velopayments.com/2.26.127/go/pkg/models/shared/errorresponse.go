package shared

// ErrorResponse
// Error response returned by all error conditions in Velo Services
type ErrorResponse struct {
	CorrelationID  *string `json:"correlationId,omitempty"`
	Errors         []Error `json:"errors,omitempty"`
	HTTPStatusCode *int64  `json:"httpStatusCode,omitempty"`
}
