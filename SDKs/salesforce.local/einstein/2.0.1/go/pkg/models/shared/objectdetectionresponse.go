package shared

type ObjectDetectionResponse struct {
	Object        *string           `json:"object"`
	Probabilities []DetectionResult `json:"probabilities"`
	SampleID      *string           `json:"sampleId"`
}
