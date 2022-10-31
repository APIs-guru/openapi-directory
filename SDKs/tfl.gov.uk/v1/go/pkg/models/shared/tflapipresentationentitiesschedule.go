package shared

type TflAPIPresentationEntitiesSchedule struct {
	FirstJourney  *TflAPIPresentationEntitiesKnownJourney  `json:"firstJourney,omitempty"`
	KnownJourneys []TflAPIPresentationEntitiesKnownJourney `json:"knownJourneys,omitempty"`
	LastJourney   *TflAPIPresentationEntitiesKnownJourney  `json:"lastJourney,omitempty"`
	Name          *string                                  `json:"name,omitempty"`
	Periods       []TflAPIPresentationEntitiesPeriod       `json:"periods,omitempty"`
}
