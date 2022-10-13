package shared

type ErrorResponseContent struct {
	Code      *int32                     `json:"code"`
	Details   *string                    `json:"details"`
	Errors    []ErrorResponseContentBase `json:"errors"`
	Message   *string                    `json:"message"`
	RequestID *string                    `json:"requestId"`
}
