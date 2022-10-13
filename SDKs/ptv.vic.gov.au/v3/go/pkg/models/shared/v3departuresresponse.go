package shared

type V3DeparturesResponse struct {
	Departures  []V3Departure                     `json:"departures"`
	Directions  map[string]V3Direction            `json:"directions"`
	Disruptions map[string]V3Disruption           `json:"disruptions"`
	Routes      map[string]map[string]interface{} `json:"routes"`
	Runs        map[string]V3Run                  `json:"runs"`
	Status      *V3Status                         `json:"status"`
	Stops       map[string]V3StopModel            `json:"stops"`
}
