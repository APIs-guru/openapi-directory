package shared

import (
	"time"
)

type TflAPIPresentationEntitiesRoadDisruptionSchedule struct {
	EndTime   *time.Time `json:"endTime,omitempty"`
	StartTime *time.Time `json:"startTime,omitempty"`
}
