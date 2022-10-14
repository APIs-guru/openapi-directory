package shared

type V3ResultRoute struct {
	RouteGtfsID        *string               `json:"route_gtfs_id,omitempty"`
	RouteID            *int32                `json:"route_id,omitempty"`
	RouteName          *string               `json:"route_name,omitempty"`
	RouteNumber        *string               `json:"route_number,omitempty"`
	RouteServiceStatus *V3RouteServiceStatus `json:"route_service_status,omitempty"`
	RouteType          *int32                `json:"route_type,omitempty"`
}
