package shared

type TelemetryData struct {
	Level          *string           `json:"level,omitempty"`
	Message        *string           `json:"message,omitempty"`
	OptionalValues map[string]string `json:"optionalValues,omitempty"`
	Time           *string           `json:"time,omitempty"`
}
