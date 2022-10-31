package shared



type ObjectDetectionResponse struct {
    Object *string `json:"object,omitempty"`
    Probabilities []DetectionResult `json:"probabilities,omitempty"`
    SampleID *string `json:"sampleId,omitempty"`
    
}

