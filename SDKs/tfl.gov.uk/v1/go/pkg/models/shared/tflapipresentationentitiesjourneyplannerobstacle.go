package shared

type TflAPIPresentationEntitiesJourneyPlannerObstacle struct {
	Incline  *string `json:"incline,omitempty"`
	Position *string `json:"position,omitempty"`
	StopID   *int32  `json:"stopId,omitempty"`
	Type     *string `json:"type,omitempty"`
}
