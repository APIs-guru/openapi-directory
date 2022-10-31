package shared



type ListCustomerSegmentsResponse struct {
    Cursor *string `json:"cursor,omitempty"`
    Errors []Error `json:"errors,omitempty"`
    Segments []CustomerSegment `json:"segments,omitempty"`
    
}

