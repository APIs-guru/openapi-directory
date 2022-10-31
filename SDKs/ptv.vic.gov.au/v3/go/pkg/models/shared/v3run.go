package shared

type V3Run struct {
	DestinationName   *string                  `json:"destination_name,omitempty"`
	DirectionID       *int32                   `json:"direction_id,omitempty"`
	ExpressStopCount  *int32                   `json:"express_stop_count,omitempty"`
	FinalStopID       *int32                   `json:"final_stop_id,omitempty"`
	Geopath           []map[string]interface{} `json:"geopath,omitempty"`
	RouteID           *int32                   `json:"route_id,omitempty"`
	RouteType         *int32                   `json:"route_type,omitempty"`
	RunID             *int32                   `json:"run_id,omitempty"`
	RunRef            *string                  `json:"run_ref,omitempty"`
	RunSequence       *int32                   `json:"run_sequence,omitempty"`
	Status            *string                  `json:"status,omitempty"`
	VehicleDescriptor *V3VehicleDescriptor     `json:"vehicle_descriptor,omitempty"`
	VehiclePosition   *V3VehiclePosition       `json:"vehicle_position,omitempty"`
}
