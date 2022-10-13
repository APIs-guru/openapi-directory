package shared

type TflAPIPresentationEntitiesJourneyPlannerRouteOption struct {
	Directions     []string                              `json:"directions"`
	ID             *string                               `json:"id"`
	LineIdentifier *TflAPIPresentationEntitiesIdentifier `json:"lineIdentifier"`
	Name           *string                               `json:"name"`
}
