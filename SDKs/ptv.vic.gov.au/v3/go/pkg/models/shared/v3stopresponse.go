package shared

type V3StopResponse struct {
	Disruptions map[string]V3Disruption `json:"disruptions"`
	Status      *V3Status               `json:"status"`
	Stop        *V3StopDetails          `json:"stop"`
}
