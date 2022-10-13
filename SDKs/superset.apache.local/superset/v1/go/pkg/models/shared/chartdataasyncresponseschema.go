package shared

type ChartDataAsyncResponseSchema struct {
	ChannelID *string `json:"channel_id"`
	JobID     *string `json:"job_id"`
	ResultURL *string `json:"result_url"`
	Status    *string `json:"status"`
	UserID    *string `json:"user_id"`
}
