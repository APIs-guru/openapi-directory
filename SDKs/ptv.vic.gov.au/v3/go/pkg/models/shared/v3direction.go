package shared

type V3Direction struct {
	DirectionID   *int32  `json:"direction_id"`
	DirectionName *string `json:"direction_name"`
	RouteID       *int32  `json:"route_id"`
	RouteType     *int32  `json:"route_type"`
}
