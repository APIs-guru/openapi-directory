package shared

type ErrorResponseContent struct {
	Code      *int32                     `json:"code,omitempty"`
	Details   *string                    `json:"details,omitempty"`
	Errors    []ErrorResponseContentBase `json:"errors,omitempty"`
	Message   *string                    `json:"message,omitempty"`
	RequestID *string                    `json:"requestId,omitempty"`
}
