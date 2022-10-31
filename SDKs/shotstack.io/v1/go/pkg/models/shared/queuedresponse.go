package shared

type QueuedResponse struct {
	Message  string             `json:"message"`
	Response QueuedResponseData `json:"response"`
	Success  bool               `json:"success"`
}
