package shared

// V3ErrorResponse
// An error response
type V3ErrorResponse struct {
	Message *string   `json:"message,omitempty"`
	Status  *V3Status `json:"status,omitempty"`
}
