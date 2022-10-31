package shared

type HealthCheckHealthCheck struct {
	Info    *string `json:"Info,omitempty"`
	Version *string `json:"Version,omitempty"`
}

type HealthCheck struct {
	HealthCheck *HealthCheckHealthCheck `json:"HealthCheck,omitempty"`
}
