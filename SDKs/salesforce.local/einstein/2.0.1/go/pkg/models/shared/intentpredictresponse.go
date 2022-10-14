package shared

type IntentPredictResponse struct {
	Object        *string       `json:"object,omitempty"`
	Probabilities []LabelResult `json:"probabilities,omitempty"`
	SampleID      *string       `json:"sampleId,omitempty"`
}
