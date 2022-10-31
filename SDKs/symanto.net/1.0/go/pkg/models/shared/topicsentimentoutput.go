package shared

type TopicSentimentOutput struct {
	ID              *string          `json:"id,omitempty"`
	Language        *string          `json:"language,omitempty"`
	Sentiments      []Sentiment      `json:"sentiments,omitempty"`
	Text            *string          `json:"text,omitempty"`
	TopicSentiments []TopicSentiment `json:"topicSentiments,omitempty"`
	Topics          []Topic          `json:"topics,omitempty"`
}
