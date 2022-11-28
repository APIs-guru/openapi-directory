package shared

// ItemApplicationListResponse
// Describes the connected application for a particular end user.
type ItemApplicationListResponse struct {
	Applications []ConnectedApplication `json:"applications"`
	RequestID    *string                `json:"request_id,omitempty"`
}
