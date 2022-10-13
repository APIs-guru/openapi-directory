package shared

type V3StopsByDistanceResponse struct {
	Disruptions map[string]V3Disruption `json:"disruptions"`
	Status      *V3Status               `json:"status"`
	Stops       []V3StopGeosearch       `json:"stops"`
}
