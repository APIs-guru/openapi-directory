package shared

type SentimentPredictResponse struct {
	Object        *string       `json:"object"`
	Probabilities []LabelResult `json:"probabilities"`
	SampleID      *string       `json:"sampleId"`
}
