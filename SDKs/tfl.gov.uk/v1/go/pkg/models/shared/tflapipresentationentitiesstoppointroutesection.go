package shared

import (
	"time"
)

type TflAPIPresentationEntitiesStopPointRouteSection struct {
	DestinationName        *string    `json:"destinationName"`
	Direction              *string    `json:"direction"`
	IsActive               *bool      `json:"isActive"`
	LineID                 *string    `json:"lineId"`
	LineString             *string    `json:"lineString"`
	Mode                   *string    `json:"mode"`
	NaptanID               *string    `json:"naptanId"`
	RouteSectionName       *string    `json:"routeSectionName"`
	ServiceType            *string    `json:"serviceType"`
	ValidFrom              *time.Time `json:"validFrom"`
	ValidTo                *time.Time `json:"validTo"`
	VehicleDestinationText *string    `json:"vehicleDestinationText"`
}
