package shared

type ErrorResponse struct {
	Msg    *string  `json:"msg"`
	Status *float64 `json:"status"`
}
