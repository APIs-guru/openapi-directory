package shared

import (
"time")

type TflAPIPresentationEntitiesMatchedRoute struct {
    Destination *string `json:"destination,omitempty"`
    DestinationName *string `json:"destinationName,omitempty"`
    Direction *string `json:"direction,omitempty"`
    Name *string `json:"name,omitempty"`
    OriginationName *string `json:"originationName,omitempty"`
    Originator *string `json:"originator,omitempty"`
    RouteCode *string `json:"routeCode,omitempty"`
    ServiceType *string `json:"serviceType,omitempty"`
    ValidFrom *time.Time `json:"validFrom,omitempty"`
    ValidTo *time.Time `json:"validTo,omitempty"`
    
}

