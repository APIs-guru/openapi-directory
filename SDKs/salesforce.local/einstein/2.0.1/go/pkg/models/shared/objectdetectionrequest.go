package shared

type ObjectDetectionRequest struct {
	ModelID             string  `json:"modelId" multipartForm:"name=modelId"`
	SampleBase64Content *string `json:"sampleBase64Content" multipartForm:"name=sampleBase64Content"`
	SampleID            *string `json:"sampleId" multipartForm:"name=sampleId"`
	SampleLocation      *string `json:"sampleLocation" multipartForm:"name=sampleLocation"`
}
