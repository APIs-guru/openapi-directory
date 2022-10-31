package shared



type TflAPIPresentationEntitiesTimetableRoute struct {
    Schedules []TflAPIPresentationEntitiesSchedule `json:"schedules,omitempty"`
    StationIntervals []TflAPIPresentationEntitiesStationInterval `json:"stationIntervals,omitempty"`
    
}

