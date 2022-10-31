package shared

type AuthorizationError struct {
	Message *string `json:"message,omitempty"`
}
