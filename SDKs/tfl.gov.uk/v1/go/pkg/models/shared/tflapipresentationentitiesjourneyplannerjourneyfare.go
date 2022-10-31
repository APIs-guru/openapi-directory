package shared



type TflAPIPresentationEntitiesJourneyPlannerJourneyFare struct {
    Caveats []TflAPIPresentationEntitiesJourneyPlannerFareCaveat `json:"caveats,omitempty"`
    Fares []TflAPIPresentationEntitiesJourneyPlannerFare `json:"fares,omitempty"`
    TotalCost *int32 `json:"totalCost,omitempty"`
    
}

