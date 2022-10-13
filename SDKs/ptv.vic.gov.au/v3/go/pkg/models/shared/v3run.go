package shared

type V3Run struct {
	DestinationName   *string                  `json:"destination_name"`
	DirectionID       *int32                   `json:"direction_id"`
	ExpressStopCount  *int32                   `json:"express_stop_count"`
	FinalStopID       *int32                   `json:"final_stop_id"`
	Geopath           []map[string]interface{} `json:"geopath"`
	RouteID           *int32                   `json:"route_id"`
	RouteType         *int32                   `json:"route_type"`
	RunID             *int32                   `json:"run_id"`
	RunRef            *string                  `json:"run_ref"`
	RunSequence       *int32                   `json:"run_sequence"`
	Status            *string                  `json:"status"`
	VehicleDescriptor *V3VehicleDescriptor     `json:"vehicle_descriptor"`
	VehiclePosition   *V3VehiclePosition       `json:"vehicle_position"`
}
