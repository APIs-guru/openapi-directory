package shared



type V3DisruptionRoute struct {
    Direction *V3DisruptionDirection `json:"direction,omitempty"`
    RouteGtfsID *string `json:"route_gtfs_id,omitempty"`
    RouteID *int32 `json:"route_id,omitempty"`
    RouteName *string `json:"route_name,omitempty"`
    RouteNumber *string `json:"route_number,omitempty"`
    RouteType *int32 `json:"route_type,omitempty"`
    
}

