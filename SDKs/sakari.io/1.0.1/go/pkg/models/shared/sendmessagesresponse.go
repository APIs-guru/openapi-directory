package shared

type SendMessagesResponseData struct {
	EstimatedPrice *float64  `json:"estimatedPrice,omitempty"`
	JobID          *string   `json:"jobId,omitempty"`
	Messages       []Message `json:"messages,omitempty"`
	Queued         *int64    `json:"queued,omitempty"`
}

type SendMessagesResponse struct {
	Data *SendMessagesResponseData `json:"data,omitempty"`
}
