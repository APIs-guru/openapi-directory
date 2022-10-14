package shared

type ChartDataAsyncResponseSchema struct {
	ChannelID *string `json:"channel_id,omitempty"`
	JobID     *string `json:"job_id,omitempty"`
	ResultURL *string `json:"result_url,omitempty"`
	Status    *string `json:"status,omitempty"`
	UserID    *string `json:"user_id,omitempty"`
}
