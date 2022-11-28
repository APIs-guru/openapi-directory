package shared

import (
	"time"
)

type TflAPIPresentationEntitiesRoadDisruptionLine struct {
	EndDate          *time.Time                    `json:"endDate,omitempty"`
	EndTime          *string                       `json:"endTime,omitempty"`
	ID               *int32                        `json:"id,omitempty"`
	IsDiversion      *bool                         `json:"isDiversion,omitempty"`
	MultiLineString  *SystemDataSpatialDbGeography `json:"multiLineString,omitempty"`
	RoadDisruptionID *string                       `json:"roadDisruptionId,omitempty"`
	StartDate        *time.Time                    `json:"startDate,omitempty"`
	StartTime        *string                       `json:"startTime,omitempty"`
}
