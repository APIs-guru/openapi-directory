package shared

type ValidationError struct {
	Field   *string `json:"field,omitempty"`
	Message *string `json:"message,omitempty"`
}
