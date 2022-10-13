package shared

type ImageClassificationResponse struct {
	Object        *string       `json:"object"`
	Probabilities []LabelResult `json:"probabilities"`
	SampleID      *string       `json:"sampleId"`
}
