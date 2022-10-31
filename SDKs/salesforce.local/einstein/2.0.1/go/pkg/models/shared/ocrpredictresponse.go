package shared



type OcrPredictResponse struct {
    Object *string `json:"object,omitempty"`
    Probabilities []OcrResult `json:"probabilities,omitempty"`
    SampleID *string `json:"sampleId,omitempty"`
    Task *string `json:"task,omitempty"`
    
}

