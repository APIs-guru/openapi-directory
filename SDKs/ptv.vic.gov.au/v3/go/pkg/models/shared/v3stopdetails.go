package shared

type V3StopDetails struct {
	DisruptionIds      []int64                  `json:"disruption_ids"`
	RouteType          *int32                   `json:"route_type"`
	Routes             []map[string]interface{} `json:"routes"`
	StationDescription *string                  `json:"station_description"`
	StationType        *string                  `json:"station_type"`
	StopAccessibility  *V3StopAccessibility     `json:"stop_accessibility"`
	StopAmenities      *V3StopAmenityDetails    `json:"stop_amenities"`
	StopID             *int32                   `json:"stop_id"`
	StopLandmark       *string                  `json:"stop_landmark"`
	StopLocation       *V3StopLocation          `json:"stop_location"`
	StopName           *string                  `json:"stop_name"`
	StopStaffing       *V3StopStaffing          `json:"stop_staffing"`
}
