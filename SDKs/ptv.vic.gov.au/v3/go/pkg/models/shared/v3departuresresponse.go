package shared



type V3DeparturesResponse struct {
    Departures []V3Departure `json:"departures,omitempty"`
    Directions map[string]V3Direction `json:"directions,omitempty"`
    Disruptions map[string]V3Disruption `json:"disruptions,omitempty"`
    Routes map[string]map[string]interface{} `json:"routes,omitempty"`
    Runs map[string]V3Run `json:"runs,omitempty"`
    Status *V3Status `json:"status,omitempty"`
    Stops map[string]V3StopModel `json:"stops,omitempty"`
    
}

