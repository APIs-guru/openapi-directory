package shared

type V3DisruptionResponse struct {
	Disruption *V3Disruption `json:"disruption"`
	Status     *V3Status     `json:"status"`
}
