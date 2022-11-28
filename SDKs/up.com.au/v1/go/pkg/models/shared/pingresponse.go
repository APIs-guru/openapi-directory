package shared

type PingResponseMeta struct {
	ID          string `json:"id"`
	StatusEmoji string `json:"statusEmoji"`
}

// PingResponse
// Basic ping response to verify authentication.
type PingResponse struct {
	Meta PingResponseMeta `json:"meta"`
}
