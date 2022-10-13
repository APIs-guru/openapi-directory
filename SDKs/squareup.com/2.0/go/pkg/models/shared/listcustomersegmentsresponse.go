package shared

type ListCustomerSegmentsResponse struct {
	Cursor   *string           `json:"cursor"`
	Errors   []Error           `json:"errors"`
	Segments []CustomerSegment `json:"segments"`
}
