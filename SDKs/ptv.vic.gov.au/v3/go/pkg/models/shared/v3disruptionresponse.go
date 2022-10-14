package shared

type V3DisruptionResponse struct {
	Disruption *V3Disruption `json:"disruption,omitempty"`
	Status     *V3Status     `json:"status,omitempty"`
}
