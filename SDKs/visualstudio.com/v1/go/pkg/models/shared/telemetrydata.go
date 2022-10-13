package shared

type TelemetryData struct {
	Level          *string           `json:"level"`
	Message        *string           `json:"message"`
	OptionalValues map[string]string `json:"optionalValues"`
	Time           *string           `json:"time"`
}
