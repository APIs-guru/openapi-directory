package shared

type V3StopGeosearch struct {
	DisruptionIds []int64                  `json:"disruption_ids"`
	RouteType     *int32                   `json:"route_type"`
	Routes        []map[string]interface{} `json:"routes"`
	StopDistance  *float32                 `json:"stop_distance"`
	StopID        *int32                   `json:"stop_id"`
	StopLandmark  *string                  `json:"stop_landmark"`
	StopLatitude  *float32                 `json:"stop_latitude"`
	StopLongitude *float32                 `json:"stop_longitude"`
	StopName      *string                  `json:"stop_name"`
	StopSequence  *int32                   `json:"stop_sequence"`
	StopSuburb    *string                  `json:"stop_suburb"`
}
