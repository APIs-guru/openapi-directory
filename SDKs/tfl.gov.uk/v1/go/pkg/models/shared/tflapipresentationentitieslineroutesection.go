package shared

type TflAPIPresentationEntitiesLineRouteSection struct {
	Destination            *string `json:"destination"`
	Direction              *string `json:"direction"`
	FromStation            *string `json:"fromStation"`
	RouteID                *int32  `json:"routeId"`
	ServiceType            *string `json:"serviceType"`
	ToStation              *string `json:"toStation"`
	VehicleDestinationText *string `json:"vehicleDestinationText"`
}
