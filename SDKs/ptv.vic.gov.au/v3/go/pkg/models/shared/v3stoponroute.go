package shared



type V3StopOnRoute struct {
    DisruptionIds []int64 `json:"disruption_ids,omitempty"`
    RouteType *int32 `json:"route_type,omitempty"`
    StopID *int32 `json:"stop_id,omitempty"`
    StopLandmark *string `json:"stop_landmark,omitempty"`
    StopLatitude *float32 `json:"stop_latitude,omitempty"`
    StopLongitude *float32 `json:"stop_longitude,omitempty"`
    StopName *string `json:"stop_name,omitempty"`
    StopSequence *int32 `json:"stop_sequence,omitempty"`
    StopSuburb *string `json:"stop_suburb,omitempty"`
    StopTicket *V3StopTicket `json:"stop_ticket,omitempty"`
    
}

