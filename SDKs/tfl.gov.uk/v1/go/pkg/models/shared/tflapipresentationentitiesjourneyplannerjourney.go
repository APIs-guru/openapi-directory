package shared

import (
	"time"
)

// TflAPIPresentationEntitiesJourneyPlannerJourney
// Object that represents an end to end journey (see schematic).
type TflAPIPresentationEntitiesJourneyPlannerJourney struct {
	ArrivalDateTime *time.Time                                           `json:"arrivalDateTime,omitempty"`
	Duration        *int32                                               `json:"duration,omitempty"`
	Fare            *TflAPIPresentationEntitiesJourneyPlannerJourneyFare `json:"fare,omitempty"`
	Legs            []TflAPIPresentationEntitiesJourneyPlannerLeg        `json:"legs,omitempty"`
	StartDateTime   *time.Time                                           `json:"startDateTime,omitempty"`
}
