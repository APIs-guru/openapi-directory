package shared

type OcrPredictResponse struct {
	Object        *string     `json:"object"`
	Probabilities []OcrResult `json:"probabilities"`
	SampleID      *string     `json:"sampleId"`
	Task          *string     `json:"task"`
}
