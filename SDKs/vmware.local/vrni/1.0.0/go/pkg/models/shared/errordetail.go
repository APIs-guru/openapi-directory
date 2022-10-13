package shared

type ErrorDetail struct {
	Code    *int32   `json:"code"`
	Message *string  `json:"message"`
	Target  []string `json:"target"`
}
