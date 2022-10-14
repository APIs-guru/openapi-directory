package shared

type TweetInteractionMetrics struct {
	ImpressionCount *int32 `json:"impression_count,omitempty"`
	LikeCount       int32  `json:"like_count"`
	QuoteCount      int32  `json:"quote_count"`
	ReplyCount      int32  `json:"reply_count"`
	RetweetCount    int32  `json:"retweet_count"`
}
