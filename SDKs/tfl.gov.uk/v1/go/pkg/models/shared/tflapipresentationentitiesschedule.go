package shared

type TflAPIPresentationEntitiesSchedule struct {
	FirstJourney  *TflAPIPresentationEntitiesKnownJourney  `json:"firstJourney"`
	KnownJourneys []TflAPIPresentationEntitiesKnownJourney `json:"knownJourneys"`
	LastJourney   *TflAPIPresentationEntitiesKnownJourney  `json:"lastJourney"`
	Name          *string                                  `json:"name"`
	Periods       []TflAPIPresentationEntitiesPeriod       `json:"periods"`
}
