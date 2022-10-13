package shared

type TweetMetricsResponse struct {
	Data   []TweetMetrics `json:"data"`
	Errors []interface{}  `json:"errors"`
}
