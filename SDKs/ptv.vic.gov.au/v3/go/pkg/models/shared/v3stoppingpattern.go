package shared



type V3StoppingPattern struct {
    Departures []V3PatternDeparture `json:"departures,omitempty"`
    Directions map[string]V3Direction `json:"directions,omitempty"`
    Disruptions []V3Disruption `json:"disruptions,omitempty"`
    Routes map[string]map[string]interface{} `json:"routes,omitempty"`
    Runs map[string]V3Run `json:"runs,omitempty"`
    Status *V3Status `json:"status,omitempty"`
    Stops map[string]V3StoppingPatternStop `json:"stops,omitempty"`
    
}

