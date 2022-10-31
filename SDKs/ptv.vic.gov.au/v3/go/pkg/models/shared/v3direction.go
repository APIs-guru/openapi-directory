package shared



type V3Direction struct {
    DirectionID *int32 `json:"direction_id,omitempty"`
    DirectionName *string `json:"direction_name,omitempty"`
    RouteID *int32 `json:"route_id,omitempty"`
    RouteType *int32 `json:"route_type,omitempty"`
    
}

