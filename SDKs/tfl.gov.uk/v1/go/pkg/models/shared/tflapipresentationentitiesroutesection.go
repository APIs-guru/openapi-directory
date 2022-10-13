package shared

import (
	"time"
)

type TflAPIPresentationEntitiesRouteSection struct {
	DestinationName                 *string                                                     `json:"destinationName"`
	Direction                       *string                                                     `json:"direction"`
	ID                              *string                                                     `json:"id"`
	LineID                          *string                                                     `json:"lineId"`
	LineString                      *string                                                     `json:"lineString"`
	Name                            *string                                                     `json:"name"`
	OriginationName                 *string                                                     `json:"originationName"`
	RouteCode                       *string                                                     `json:"routeCode"`
	RouteSectionNaptanEntrySequence []TflAPIPresentationEntitiesRouteSectionNaptanEntrySequence `json:"routeSectionNaptanEntrySequence"`
	ValidFrom                       *time.Time                                                  `json:"validFrom"`
	ValidTo                         *time.Time                                                  `json:"validTo"`
}
