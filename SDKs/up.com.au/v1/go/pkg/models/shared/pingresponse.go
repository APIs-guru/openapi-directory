package shared

type PingResponseMeta struct {
	ID          string `json:"id"`
	StatusEmoji string `json:"statusEmoji"`
}

type PingResponse struct {
	Meta PingResponseMeta `json:"meta"`
}
