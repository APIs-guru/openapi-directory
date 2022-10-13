package shared

type TflAPIPresentationEntitiesTimetable struct {
	DepartureStopID *string                                    `json:"departureStopId"`
	Routes          []TflAPIPresentationEntitiesTimetableRoute `json:"routes"`
}
