package shared

type ProblemDetails struct {
	Detail     *string                `json:"detail"`
	Extensions map[string]interface{} `json:"extensions"`
	Instance   *string                `json:"instance"`
	Status     *int32                 `json:"status"`
	Title      *string                `json:"title"`
	Type       *string                `json:"type"`
}
