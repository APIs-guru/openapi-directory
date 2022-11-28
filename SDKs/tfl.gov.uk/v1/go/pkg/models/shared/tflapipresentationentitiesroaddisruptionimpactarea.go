package shared

import (
	"time"
)

type TflAPIPresentationEntitiesRoadDisruptionImpactArea struct {
	EndDate          *time.Time                    `json:"endDate,omitempty"`
	EndTime          *string                       `json:"endTime,omitempty"`
	ID               *int32                        `json:"id,omitempty"`
	Polygon          *SystemDataSpatialDbGeography `json:"polygon,omitempty"`
	RoadDisruptionID *string                       `json:"roadDisruptionId,omitempty"`
	StartDate        *time.Time                    `json:"startDate,omitempty"`
	StartTime        *string                       `json:"startTime,omitempty"`
}
