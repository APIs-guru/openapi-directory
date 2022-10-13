package shared

type SearchAvailabilityFilter struct {
	BookingID      *string         `json:"booking_id"`
	LocationID     *string         `json:"location_id"`
	SegmentFilters []SegmentFilter `json:"segment_filters"`
	StartAtRange   TimeRange       `json:"start_at_range"`
}
