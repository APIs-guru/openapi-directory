package shared

import (
	"time"
)

type TflAPIPresentationEntitiesJourneyPlannerJourney struct {
	ArrivalDateTime *time.Time                                           `json:"arrivalDateTime"`
	Duration        *int32                                               `json:"duration"`
	Fare            *TflAPIPresentationEntitiesJourneyPlannerJourneyFare `json:"fare"`
	Legs            []TflAPIPresentationEntitiesJourneyPlannerLeg        `json:"legs"`
	StartDateTime   *time.Time                                           `json:"startDateTime"`
}
