package shared

type V3DisruptionDirection struct {
	DirectionID      *int32  `json:"direction_id,omitempty"`
	DirectionName    *string `json:"direction_name,omitempty"`
	RouteDirectionID *int32  `json:"route_direction_id,omitempty"`
	ServiceTime      *string `json:"service_time,omitempty"`
}
