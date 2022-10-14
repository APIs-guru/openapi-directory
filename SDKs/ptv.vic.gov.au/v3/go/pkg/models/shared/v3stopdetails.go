package shared

type V3StopDetails struct {
	DisruptionIds      []int64                  `json:"disruption_ids,omitempty"`
	RouteType          *int32                   `json:"route_type,omitempty"`
	Routes             []map[string]interface{} `json:"routes,omitempty"`
	StationDescription *string                  `json:"station_description,omitempty"`
	StationType        *string                  `json:"station_type,omitempty"`
	StopAccessibility  *V3StopAccessibility     `json:"stop_accessibility,omitempty"`
	StopAmenities      *V3StopAmenityDetails    `json:"stop_amenities,omitempty"`
	StopID             *int32                   `json:"stop_id,omitempty"`
	StopLandmark       *string                  `json:"stop_landmark,omitempty"`
	StopLocation       *V3StopLocation          `json:"stop_location,omitempty"`
	StopName           *string                  `json:"stop_name,omitempty"`
	StopStaffing       *V3StopStaffing          `json:"stop_staffing,omitempty"`
}
