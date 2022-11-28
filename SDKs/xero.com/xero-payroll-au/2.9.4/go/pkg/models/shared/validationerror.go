package shared

// ValidationError

// https://developer.xero.com/documentation/api/http-response-codes
type ValidationError struct {
	Message *string `json:"Message,omitempty"`
}
