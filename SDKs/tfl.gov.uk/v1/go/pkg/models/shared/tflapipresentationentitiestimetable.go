package shared

type TflAPIPresentationEntitiesTimetable struct {
	DepartureStopID *string                                    `json:"departureStopId,omitempty"`
	Routes          []TflAPIPresentationEntitiesTimetableRoute `json:"routes,omitempty"`
}
