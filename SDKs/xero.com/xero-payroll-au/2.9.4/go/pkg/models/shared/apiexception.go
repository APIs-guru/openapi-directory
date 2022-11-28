package shared

// APIException
// The object returned for a bad request
type APIException struct {
	ErrorNumber *float64 `json:"ErrorNumber,omitempty"`
	Message     *string  `json:"Message,omitempty"`
	Type        *string  `json:"Type,omitempty"`
}
