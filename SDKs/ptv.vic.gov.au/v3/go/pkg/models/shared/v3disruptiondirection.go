package shared

type V3DisruptionDirection struct {
	DirectionID      *int32  `json:"direction_id"`
	DirectionName    *string `json:"direction_name"`
	RouteDirectionID *int32  `json:"route_direction_id"`
	ServiceTime      *string `json:"service_time"`
}
