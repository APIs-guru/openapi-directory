package shared

type TflAPIPresentationEntitiesJourneyPlannerObstacle struct {
	Incline  *string `json:"incline"`
	Position *string `json:"position"`
	StopID   *int32  `json:"stopId"`
	Type     *string `json:"type"`
}
