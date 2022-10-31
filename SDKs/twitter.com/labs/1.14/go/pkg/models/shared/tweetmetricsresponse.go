package shared

type TweetMetricsResponse struct {
	Data   []TweetMetrics `json:"data,omitempty"`
	Errors []interface{}  `json:"errors,omitempty"`
}
