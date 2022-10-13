package shared

type V3DirectionWithDescription struct {
	DirectionID               *int32  `json:"direction_id"`
	DirectionName             *string `json:"direction_name"`
	RouteDirectionDescription *string `json:"route_direction_description"`
	RouteID                   *int32  `json:"route_id"`
	RouteType                 *int32  `json:"route_type"`
}
