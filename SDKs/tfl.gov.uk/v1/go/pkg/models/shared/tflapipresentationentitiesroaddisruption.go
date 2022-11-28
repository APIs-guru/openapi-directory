package shared

import (
	"time"
)

type TflAPIPresentationEntitiesRoadDisruption struct {
	Category                  *string                                              `json:"category,omitempty"`
	Comments                  *string                                              `json:"comments,omitempty"`
	CorridorIds               []string                                             `json:"corridorIds,omitempty"`
	CurrentUpdate             *string                                              `json:"currentUpdate,omitempty"`
	CurrentUpdateDateTime     *time.Time                                           `json:"currentUpdateDateTime,omitempty"`
	EndDateTime               *time.Time                                           `json:"endDateTime,omitempty"`
	Geography                 *SystemDataSpatialDbGeography                        `json:"geography,omitempty"`
	Geometry                  *SystemDataSpatialDbGeography                        `json:"geometry,omitempty"`
	HasClosures               *bool                                                `json:"hasClosures,omitempty"`
	ID                        *string                                              `json:"id,omitempty"`
	IsProvisional             *bool                                                `json:"isProvisional,omitempty"`
	LastModifiedTime          *time.Time                                           `json:"lastModifiedTime,omitempty"`
	LevelOfInterest           *string                                              `json:"levelOfInterest,omitempty"`
	LinkText                  *string                                              `json:"linkText,omitempty"`
	LinkURL                   *string                                              `json:"linkUrl,omitempty"`
	Location                  *string                                              `json:"location,omitempty"`
	Ordinal                   *int32                                               `json:"ordinal,omitempty"`
	Point                     *string                                              `json:"point,omitempty"`
	PublishEndDate            *time.Time                                           `json:"publishEndDate,omitempty"`
	PublishStartDate          *time.Time                                           `json:"publishStartDate,omitempty"`
	RecurringSchedules        []TflAPIPresentationEntitiesRoadDisruptionSchedule   `json:"recurringSchedules,omitempty"`
	RoadDisruptionImpactAreas []TflAPIPresentationEntitiesRoadDisruptionImpactArea `json:"roadDisruptionImpactAreas,omitempty"`
	RoadDisruptionLines       []TflAPIPresentationEntitiesRoadDisruptionLine       `json:"roadDisruptionLines,omitempty"`
	RoadProject               *TflAPIPresentationEntitiesRoadProject               `json:"roadProject,omitempty"`
	Severity                  *string                                              `json:"severity,omitempty"`
	StartDateTime             *time.Time                                           `json:"startDateTime,omitempty"`
	Status                    *string                                              `json:"status,omitempty"`
	Streets                   []TflAPIPresentationEntitiesStreet                   `json:"streets,omitempty"`
	SubCategory               *string                                              `json:"subCategory,omitempty"`
	TimeFrame                 *string                                              `json:"timeFrame,omitempty"`
	URL                       *string                                              `json:"url,omitempty"`
}
