package shared

type APIException struct {
	ErrorNumber *float64 `json:"ErrorNumber"`
	Message     *string  `json:"Message"`
	Type        *string  `json:"Type"`
}
