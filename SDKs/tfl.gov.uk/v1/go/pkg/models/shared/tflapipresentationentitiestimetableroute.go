package shared

type TflAPIPresentationEntitiesTimetableRoute struct {
	Schedules        []TflAPIPresentationEntitiesSchedule        `json:"schedules"`
	StationIntervals []TflAPIPresentationEntitiesStationInterval `json:"stationIntervals"`
}
