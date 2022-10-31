package shared

type TflAPIPresentationEntitiesJourneyPlannerRouteOption struct {
	Directions     []string                              `json:"directions,omitempty"`
	ID             *string                               `json:"id,omitempty"`
	LineIdentifier *TflAPIPresentationEntitiesIdentifier `json:"lineIdentifier,omitempty"`
	Name           *string                               `json:"name,omitempty"`
}
