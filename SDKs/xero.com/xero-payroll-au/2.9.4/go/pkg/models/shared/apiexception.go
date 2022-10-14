package shared

type APIException struct {
	ErrorNumber *float64 `json:"ErrorNumber,omitempty"`
	Message     *string  `json:"Message,omitempty"`
	Type        *string  `json:"Type,omitempty"`
}
