package shared



type SearchAvailabilityFilter struct {
    BookingID *string `json:"booking_id,omitempty"`
    LocationID *string `json:"location_id,omitempty"`
    SegmentFilters []SegmentFilter `json:"segment_filters,omitempty"`
    StartAtRange TimeRange `json:"start_at_range"`
    
}

