package shared

import (
	"time"
)

type TflAPIPresentationEntitiesLine struct {
	Created       *time.Time                                      `json:"created"`
	Crowding      *TflAPIPresentationEntitiesCrowding             `json:"crowding"`
	Disruptions   []TflAPIPresentationEntitiesDisruption          `json:"disruptions"`
	ID            *string                                         `json:"id"`
	LineStatuses  []TflAPIPresentationEntitiesLineStatus          `json:"lineStatuses"`
	ModeName      *string                                         `json:"modeName"`
	Modified      *time.Time                                      `json:"modified"`
	Name          *string                                         `json:"name"`
	RouteSections []TflAPIPresentationEntitiesMatchedRoute        `json:"routeSections"`
	ServiceTypes  []TflAPIPresentationEntitiesLineServiceTypeInfo `json:"serviceTypes"`
}
