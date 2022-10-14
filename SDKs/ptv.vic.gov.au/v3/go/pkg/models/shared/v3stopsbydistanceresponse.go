package shared

type V3StopsByDistanceResponse struct {
	Disruptions map[string]V3Disruption `json:"disruptions,omitempty"`
	Status      *V3Status               `json:"status,omitempty"`
	Stops       []V3StopGeosearch       `json:"stops,omitempty"`
}
