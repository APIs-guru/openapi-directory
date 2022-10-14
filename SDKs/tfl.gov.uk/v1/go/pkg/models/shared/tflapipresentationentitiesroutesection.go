package shared

import (
	"time"
)

type TflAPIPresentationEntitiesRouteSection struct {
	DestinationName                 *string                                                     `json:"destinationName,omitempty"`
	Direction                       *string                                                     `json:"direction,omitempty"`
	ID                              *string                                                     `json:"id,omitempty"`
	LineID                          *string                                                     `json:"lineId,omitempty"`
	LineString                      *string                                                     `json:"lineString,omitempty"`
	Name                            *string                                                     `json:"name,omitempty"`
	OriginationName                 *string                                                     `json:"originationName,omitempty"`
	RouteCode                       *string                                                     `json:"routeCode,omitempty"`
	RouteSectionNaptanEntrySequence []TflAPIPresentationEntitiesRouteSectionNaptanEntrySequence `json:"routeSectionNaptanEntrySequence,omitempty"`
	ValidFrom                       *time.Time                                                  `json:"validFrom,omitempty"`
	ValidTo                         *time.Time                                                  `json:"validTo,omitempty"`
}
