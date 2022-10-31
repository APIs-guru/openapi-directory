package shared

type RetrieveCustomerSegmentResponse struct {
	Errors  []Error          `json:"errors,omitempty"`
	Segment *CustomerSegment `json:"segment,omitempty"`
}
