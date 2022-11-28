package shared

// ApplicationGetResponse
// The request ID associated with this call.
type ApplicationGetResponse struct {
	Application Application `json:"application"`
	RequestID   string      `json:"request_id"`
}
