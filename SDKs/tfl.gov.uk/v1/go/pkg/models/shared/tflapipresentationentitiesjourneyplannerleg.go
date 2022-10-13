package shared

import (
	"time"
)

type TflAPIPresentationEntitiesJourneyPlannerLeg struct {
	ArrivalPoint      *TflAPIPresentationEntitiesPoint                      `json:"arrivalPoint"`
	ArrivalTime       *time.Time                                            `json:"arrivalTime"`
	DeparturePoint    *TflAPIPresentationEntitiesPoint                      `json:"departurePoint"`
	DepartureTime     *time.Time                                            `json:"departureTime"`
	Disruptions       []TflAPIPresentationEntitiesDisruption                `json:"disruptions"`
	Distance          *float64                                              `json:"distance"`
	Duration          *int32                                                `json:"duration"`
	HasFixedLocations *bool                                                 `json:"hasFixedLocations"`
	Instruction       *TflAPIPresentationEntitiesInstruction                `json:"instruction"`
	IsDisrupted       *bool                                                 `json:"isDisrupted"`
	Mode              *TflAPIPresentationEntitiesIdentifier                 `json:"mode"`
	Obstacles         []TflAPIPresentationEntitiesJourneyPlannerObstacle    `json:"obstacles"`
	Path              *TflAPIPresentationEntitiesJourneyPlannerPath         `json:"path"`
	PlannedWorks      []TflAPIPresentationEntitiesJourneyPlannerPlannedWork `json:"plannedWorks"`
	RouteOptions      []TflAPIPresentationEntitiesJourneyPlannerRouteOption `json:"routeOptions"`
	Speed             *string                                               `json:"speed"`
}
