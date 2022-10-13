package shared

import (
	"time"
)

type TflAPIPresentationEntitiesMatchedRoute struct {
	Destination     *string    `json:"destination"`
	DestinationName *string    `json:"destinationName"`
	Direction       *string    `json:"direction"`
	Name            *string    `json:"name"`
	OriginationName *string    `json:"originationName"`
	Originator      *string    `json:"originator"`
	RouteCode       *string    `json:"routeCode"`
	ServiceType     *string    `json:"serviceType"`
	ValidFrom       *time.Time `json:"validFrom"`
	ValidTo         *time.Time `json:"validTo"`
}
