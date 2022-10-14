package shared

import (
	"time"
)

type TflAPIPresentationEntitiesJourneyPlannerPlannedWork struct {
	CreatedDateTime    *time.Time `json:"createdDateTime,omitempty"`
	Description        *string    `json:"description,omitempty"`
	ID                 *string    `json:"id,omitempty"`
	LastUpdateDateTime *time.Time `json:"lastUpdateDateTime,omitempty"`
}
