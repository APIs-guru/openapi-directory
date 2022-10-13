package shared

type ErrorResponse struct {
	CorrelationID  *string `json:"correlationId"`
	Errors         []Error `json:"errors"`
	HTTPStatusCode *int64  `json:"httpStatusCode"`
}
