package shared

type V3DirectionWithDescription struct {
	DirectionID               *int32  `json:"direction_id,omitempty"`
	DirectionName             *string `json:"direction_name,omitempty"`
	RouteDirectionDescription *string `json:"route_direction_description,omitempty"`
	RouteID                   *int32  `json:"route_id,omitempty"`
	RouteType                 *int32  `json:"route_type,omitempty"`
}
