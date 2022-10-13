package shared

type RetrieveCustomerSegmentResponse struct {
	Errors  []Error          `json:"errors"`
	Segment *CustomerSegment `json:"segment"`
}
