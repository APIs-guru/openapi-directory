package shared

type SendMessagesResponseData struct {
	EstimatedPrice *float64  `json:"estimatedPrice"`
	JobID          *string   `json:"jobId"`
	Messages       []Message `json:"messages"`
	Queued         *int64    `json:"queued"`
}

type SendMessagesResponse struct {
	Data *SendMessagesResponseData `json:"data"`
}
