package shared

type V3DisruptionModesResponse struct {
	DisruptionModes []V3DisruptionMode `json:"disruption_modes"`
	Status          *V3Status          `json:"status"`
}
