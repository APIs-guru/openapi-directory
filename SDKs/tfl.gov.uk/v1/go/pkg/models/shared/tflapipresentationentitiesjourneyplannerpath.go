package shared



type TflAPIPresentationEntitiesJourneyPlannerPath struct {
    Elevation []TflAPICommonJourneyPlannerJpElevation `json:"elevation,omitempty"`
    LineString *string `json:"lineString,omitempty"`
    StopPoints []TflAPIPresentationEntitiesIdentifier `json:"stopPoints,omitempty"`
    
}

