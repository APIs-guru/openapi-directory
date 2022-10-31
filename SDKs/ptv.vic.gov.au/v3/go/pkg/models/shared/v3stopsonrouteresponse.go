package shared

type V3StopsOnRouteResponse struct {
	Disruptions map[string]V3Disruption  `json:"disruptions,omitempty"`
	Geopath     []map[string]interface{} `json:"geopath,omitempty"`
	Status      *V3Status                `json:"status,omitempty"`
	Stops       []V3StopOnRoute          `json:"stops,omitempty"`
}
