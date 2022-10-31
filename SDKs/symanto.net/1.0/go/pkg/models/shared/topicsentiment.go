package shared



type TopicSentiment struct {
    Sentence *string `json:"sentence,omitempty"`
    Sentiment *Sentiment `json:"sentiment,omitempty"`
    Topic *Topic `json:"topic,omitempty"`
    
}

