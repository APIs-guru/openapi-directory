package shared

// QueuedResponse
// The response received after a [render request](#render-asset) is submitted. The render task is queued for rendering and a unique render id is returned.
type QueuedResponse struct {
	Message  string             `json:"message"`
	Response QueuedResponseData `json:"response"`
	Success  bool               `json:"success"`
}
