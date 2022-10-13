package shared

type IntentPredictResponse struct {
	Object        *string       `json:"object"`
	Probabilities []LabelResult `json:"probabilities"`
	SampleID      *string       `json:"sampleId"`
}
