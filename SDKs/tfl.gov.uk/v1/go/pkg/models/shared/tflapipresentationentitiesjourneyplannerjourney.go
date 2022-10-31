package shared

import (
"time")

type TflAPIPresentationEntitiesJourneyPlannerJourney struct {
    ArrivalDateTime *time.Time `json:"arrivalDateTime,omitempty"`
    Duration *int32 `json:"duration,omitempty"`
    Fare *TflAPIPresentationEntitiesJourneyPlannerJourneyFare `json:"fare,omitempty"`
    Legs []TflAPIPresentationEntitiesJourneyPlannerLeg `json:"legs,omitempty"`
    StartDateTime *time.Time `json:"startDateTime,omitempty"`
    
}

