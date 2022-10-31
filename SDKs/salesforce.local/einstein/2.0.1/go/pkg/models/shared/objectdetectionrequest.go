package shared



type ObjectDetectionRequest struct {
    ModelID string `json:"modelId" multipartForm:"name=modelId"`
    SampleBase64Content *string `json:"sampleBase64Content,omitempty" multipartForm:"name=sampleBase64Content"`
    SampleID *string `json:"sampleId,omitempty" multipartForm:"name=sampleId"`
    SampleLocation *string `json:"sampleLocation,omitempty" multipartForm:"name=sampleLocation"`
    
}

