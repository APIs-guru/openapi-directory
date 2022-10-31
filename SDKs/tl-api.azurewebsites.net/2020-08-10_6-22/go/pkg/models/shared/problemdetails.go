package shared

type ProblemDetails struct {
	Detail     *string                `json:"detail,omitempty"`
	Extensions map[string]interface{} `json:"extensions,omitempty"`
	Instance   *string                `json:"instance,omitempty"`
	Status     *int32                 `json:"status,omitempty"`
	Title      *string                `json:"title,omitempty"`
	Type       *string                `json:"type,omitempty"`
}
