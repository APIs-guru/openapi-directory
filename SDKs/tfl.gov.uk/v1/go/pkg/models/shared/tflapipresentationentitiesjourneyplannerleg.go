package shared

import (
	"time"
)

type TflAPIPresentationEntitiesJourneyPlannerLeg struct {
	ArrivalPoint      *TflAPIPresentationEntitiesPoint                      `json:"arrivalPoint,omitempty"`
	ArrivalTime       *time.Time                                            `json:"arrivalTime,omitempty"`
	DeparturePoint    *TflAPIPresentationEntitiesPoint                      `json:"departurePoint,omitempty"`
	DepartureTime     *time.Time                                            `json:"departureTime,omitempty"`
	Disruptions       []TflAPIPresentationEntitiesDisruption                `json:"disruptions,omitempty"`
	Distance          *float64                                              `json:"distance,omitempty"`
	Duration          *int32                                                `json:"duration,omitempty"`
	HasFixedLocations *bool                                                 `json:"hasFixedLocations,omitempty"`
	Instruction       *TflAPIPresentationEntitiesInstruction                `json:"instruction,omitempty"`
	IsDisrupted       *bool                                                 `json:"isDisrupted,omitempty"`
	Mode              *TflAPIPresentationEntitiesIdentifier                 `json:"mode,omitempty"`
	Obstacles         []TflAPIPresentationEntitiesJourneyPlannerObstacle    `json:"obstacles,omitempty"`
	Path              *TflAPIPresentationEntitiesJourneyPlannerPath         `json:"path,omitempty"`
	PlannedWorks      []TflAPIPresentationEntitiesJourneyPlannerPlannedWork `json:"plannedWorks,omitempty"`
	RouteOptions      []TflAPIPresentationEntitiesJourneyPlannerRouteOption `json:"routeOptions,omitempty"`
	Speed             *string                                               `json:"speed,omitempty"`
}
