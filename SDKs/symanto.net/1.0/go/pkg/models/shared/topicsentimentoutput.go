package shared

type TopicSentimentOutput struct {
	ID              *string          `json:"id"`
	Language        *string          `json:"language"`
	Sentiments      []Sentiment      `json:"sentiments"`
	Text            *string          `json:"text"`
	TopicSentiments []TopicSentiment `json:"topicSentiments"`
	Topics          []Topic          `json:"topics"`
}
