package shared

type IntentPredictRequest struct {
	Document   string  `json:"document" multipartForm:"name=document"`
	ModelID    string  `json:"modelId" multipartForm:"name=modelId"`
	NumResults *int32  `json:"numResults" multipartForm:"name=numResults"`
	SampleID   *string `json:"sampleId" multipartForm:"name=sampleId"`
}
