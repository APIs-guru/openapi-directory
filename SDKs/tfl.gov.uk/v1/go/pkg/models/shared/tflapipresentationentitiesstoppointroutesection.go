package shared

import (
"time")

type TflAPIPresentationEntitiesStopPointRouteSection struct {
    DestinationName *string `json:"destinationName,omitempty"`
    Direction *string `json:"direction,omitempty"`
    IsActive *bool `json:"isActive,omitempty"`
    LineID *string `json:"lineId,omitempty"`
    LineString *string `json:"lineString,omitempty"`
    Mode *string `json:"mode,omitempty"`
    NaptanID *string `json:"naptanId,omitempty"`
    RouteSectionName *string `json:"routeSectionName,omitempty"`
    ServiceType *string `json:"serviceType,omitempty"`
    ValidFrom *time.Time `json:"validFrom,omitempty"`
    ValidTo *time.Time `json:"validTo,omitempty"`
    VehicleDestinationText *string `json:"vehicleDestinationText,omitempty"`
    
}

