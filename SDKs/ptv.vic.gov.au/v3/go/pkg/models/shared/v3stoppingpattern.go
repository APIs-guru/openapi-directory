package shared

type V3StoppingPattern struct {
	Departures  []V3PatternDeparture              `json:"departures"`
	Directions  map[string]V3Direction            `json:"directions"`
	Disruptions []V3Disruption                    `json:"disruptions"`
	Routes      map[string]map[string]interface{} `json:"routes"`
	Runs        map[string]V3Run                  `json:"runs"`
	Status      *V3Status                         `json:"status"`
	Stops       map[string]V3StoppingPatternStop  `json:"stops"`
}
