package shared

import (
	"time"
)

type TflAPIPresentationEntitiesJourneyPlannerPlannedWork struct {
	CreatedDateTime    *time.Time `json:"createdDateTime"`
	Description        *string    `json:"description"`
	ID                 *string    `json:"id"`
	LastUpdateDateTime *time.Time `json:"lastUpdateDateTime"`
}
