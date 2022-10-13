package shared

type TopicSentiment struct {
	Sentence  *string    `json:"sentence"`
	Sentiment *Sentiment `json:"sentiment"`
	Topic     *Topic     `json:"topic"`
}
