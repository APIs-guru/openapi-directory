package shared

type TflAPIPresentationEntitiesJourneyPlannerJourneyFare struct {
	Caveats   []TflAPIPresentationEntitiesJourneyPlannerFareCaveat `json:"caveats"`
	Fares     []TflAPIPresentationEntitiesJourneyPlannerFare       `json:"fares"`
	TotalCost *int32                                               `json:"totalCost"`
}
