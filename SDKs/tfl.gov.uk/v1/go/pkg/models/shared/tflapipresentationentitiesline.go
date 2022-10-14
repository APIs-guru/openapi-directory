package shared

import (
	"time"
)

type TflAPIPresentationEntitiesLine struct {
	Created       *time.Time                                      `json:"created,omitempty"`
	Crowding      *TflAPIPresentationEntitiesCrowding             `json:"crowding,omitempty"`
	Disruptions   []TflAPIPresentationEntitiesDisruption          `json:"disruptions,omitempty"`
	ID            *string                                         `json:"id,omitempty"`
	LineStatuses  []TflAPIPresentationEntitiesLineStatus          `json:"lineStatuses,omitempty"`
	ModeName      *string                                         `json:"modeName,omitempty"`
	Modified      *time.Time                                      `json:"modified,omitempty"`
	Name          *string                                         `json:"name,omitempty"`
	RouteSections []TflAPIPresentationEntitiesMatchedRoute        `json:"routeSections,omitempty"`
	ServiceTypes  []TflAPIPresentationEntitiesLineServiceTypeInfo `json:"serviceTypes,omitempty"`
}
