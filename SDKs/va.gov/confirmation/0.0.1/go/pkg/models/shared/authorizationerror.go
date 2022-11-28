package shared

// AuthorizationError
// API Platform authorization (API token) error
type AuthorizationError struct {
	Message *string `json:"message,omitempty"`
}
