package shared

type TflAPIPresentationEntitiesJourneyPlannerTimeAdjustments struct {
	Earlier  *TflAPIPresentationEntitiesJourneyPlannerTimeAdjustment `json:"earlier"`
	Earliest *TflAPIPresentationEntitiesJourneyPlannerTimeAdjustment `json:"earliest"`
	Later    *TflAPIPresentationEntitiesJourneyPlannerTimeAdjustment `json:"later"`
	Latest   *TflAPIPresentationEntitiesJourneyPlannerTimeAdjustment `json:"latest"`
}
