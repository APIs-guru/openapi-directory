package shared

type V3DisruptionRoute struct {
	Direction   *V3DisruptionDirection `json:"direction"`
	RouteGtfsID *string                `json:"route_gtfs_id"`
	RouteID     *int32                 `json:"route_id"`
	RouteName   *string                `json:"route_name"`
	RouteNumber *string                `json:"route_number"`
	RouteType   *int32                 `json:"route_type"`
}
