package operations

import (
	"openapi/pkg/models/shared"
)

type RetrainRequestBody struct {
	Algorithm    *string                       `multipartForm:"name=algorithm"`
	Epochs       *int32                        `multipartForm:"name=epochs"`
	LearningRate *float32                      `multipartForm:"name=learningRate"`
	ModelID      *string                       `multipartForm:"name=modelId"`
	TrainParams  *shared.V2LanguageTrainParams `multipartForm:"name=trainParams,json"`
}

type RetrainSecurity struct {
	BearerToken shared.SchemeBearerToken `security:"scheme,type=http,subtype=bearer"`
}

type RetrainRequest struct {
	Request  *RetrainRequestBody `request:"mediaType=multipart/form-data"`
	Security RetrainSecurity
}

type RetrainResponse struct {
	ContentType   string
	StatusCode    int64
	TrainResponse *shared.TrainResponse
}
