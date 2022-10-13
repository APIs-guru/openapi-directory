package shared

type Availability struct {
	AppointmentSegments []AppointmentSegment `json:"appointment_segments"`
	LocationID          *string              `json:"location_id"`
	StartAt             *string              `json:"start_at"`
}
