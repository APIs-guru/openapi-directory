package shared

type ImageClassificationRequest struct {
	ModelID             string  `json:"modelId" multipartForm:"name=modelId"`
	NumResults          *int32  `json:"numResults" multipartForm:"name=numResults"`
	SampleBase64Content *string `json:"sampleBase64Content" multipartForm:"name=sampleBase64Content"`
	SampleID            *string `json:"sampleId" multipartForm:"name=sampleId"`
	SampleLocation      *string `json:"sampleLocation" multipartForm:"name=sampleLocation"`
}
