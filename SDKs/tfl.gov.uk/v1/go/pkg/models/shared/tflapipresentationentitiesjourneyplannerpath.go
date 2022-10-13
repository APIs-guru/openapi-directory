package shared

type TflAPIPresentationEntitiesJourneyPlannerPath struct {
	Elevation  []TflAPICommonJourneyPlannerJpElevation `json:"elevation"`
	LineString *string                                 `json:"lineString"`
	StopPoints []TflAPIPresentationEntitiesIdentifier  `json:"stopPoints"`
}
