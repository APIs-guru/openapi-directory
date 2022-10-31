package shared



type Availability struct {
    AppointmentSegments []AppointmentSegment `json:"appointment_segments,omitempty"`
    LocationID *string `json:"location_id,omitempty"`
    StartAt *string `json:"start_at,omitempty"`
    
}

