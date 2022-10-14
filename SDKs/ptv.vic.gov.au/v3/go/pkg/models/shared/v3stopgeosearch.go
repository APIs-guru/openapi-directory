package shared

type V3StopGeosearch struct {
	DisruptionIds []int64                  `json:"disruption_ids,omitempty"`
	RouteType     *int32                   `json:"route_type,omitempty"`
	Routes        []map[string]interface{} `json:"routes,omitempty"`
	StopDistance  *float32                 `json:"stop_distance,omitempty"`
	StopID        *int32                   `json:"stop_id,omitempty"`
	StopLandmark  *string                  `json:"stop_landmark,omitempty"`
	StopLatitude  *float32                 `json:"stop_latitude,omitempty"`
	StopLongitude *float32                 `json:"stop_longitude,omitempty"`
	StopName      *string                  `json:"stop_name,omitempty"`
	StopSequence  *int32                   `json:"stop_sequence,omitempty"`
	StopSuburb    *string                  `json:"stop_suburb,omitempty"`
}
