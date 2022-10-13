package shared

type V3ResultRoute struct {
	RouteGtfsID        *string               `json:"route_gtfs_id"`
	RouteID            *int32                `json:"route_id"`
	RouteName          *string               `json:"route_name"`
	RouteNumber        *string               `json:"route_number"`
	RouteServiceStatus *V3RouteServiceStatus `json:"route_service_status"`
	RouteType          *int32                `json:"route_type"`
}
