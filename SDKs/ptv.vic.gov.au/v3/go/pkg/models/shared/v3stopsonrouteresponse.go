package shared

type V3StopsOnRouteResponse struct {
	Disruptions map[string]V3Disruption  `json:"disruptions"`
	Geopath     []map[string]interface{} `json:"geopath"`
	Status      *V3Status                `json:"status"`
	Stops       []V3StopOnRoute          `json:"stops"`
}
