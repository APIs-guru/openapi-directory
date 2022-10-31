package shared



type TflAPIPresentationEntitiesLineRouteSection struct {
    Destination *string `json:"destination,omitempty"`
    Direction *string `json:"direction,omitempty"`
    FromStation *string `json:"fromStation,omitempty"`
    RouteID *int32 `json:"routeId,omitempty"`
    ServiceType *string `json:"serviceType,omitempty"`
    ToStation *string `json:"toStation,omitempty"`
    VehicleDestinationText *string `json:"vehicleDestinationText,omitempty"`
    
}

