package shared



type ImageClassificationRequest struct {
    ModelID string `json:"modelId" multipartForm:"name=modelId"`
    NumResults *int32 `json:"numResults,omitempty" multipartForm:"name=numResults"`
    SampleBase64Content *string `json:"sampleBase64Content,omitempty" multipartForm:"name=sampleBase64Content"`
    SampleID *string `json:"sampleId,omitempty" multipartForm:"name=sampleId"`
    SampleLocation *string `json:"sampleLocation,omitempty" multipartForm:"name=sampleLocation"`
    
}

