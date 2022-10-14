package shared

type ErrorResponse struct {
	Msg    *string  `json:"msg,omitempty"`
	Status *float64 `json:"status,omitempty"`
}
