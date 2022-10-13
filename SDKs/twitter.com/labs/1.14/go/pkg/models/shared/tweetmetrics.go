package shared

type TweetMetrics struct {
	Tweet   TweetInteractionMetrics `json:"tweet"`
	TweetID string                  `json:"tweet_id"`
	Video   *VideoMetrics           `json:"video"`
}
