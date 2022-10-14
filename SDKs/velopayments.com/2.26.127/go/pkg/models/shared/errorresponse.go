package shared

type ErrorResponse struct {
	CorrelationID  *string `json:"correlationId,omitempty"`
	Errors         []Error `json:"errors,omitempty"`
	HTTPStatusCode *int64  `json:"httpStatusCode,omitempty"`
}
