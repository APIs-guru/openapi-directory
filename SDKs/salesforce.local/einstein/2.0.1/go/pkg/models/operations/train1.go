package operations

import (
	"openapi/pkg/models/shared"
)

type Train1RequestBody struct {
	Algorithm    *string                     `multipartForm:"name=algorithm"`
	DatasetID    *int64                      `multipartForm:"name=datasetId"`
	Epochs       *int32                      `multipartForm:"name=epochs"`
	LearningRate *float64                    `multipartForm:"name=learningRate"`
	Name         *string                     `multipartForm:"name=name"`
	TrainParams  *shared.V2VisionTrainParams `multipartForm:"name=trainParams,json"`
}

type Train1Security struct {
	BearerToken shared.SchemeBearerToken `security:"scheme,type=http,subtype=bearer"`
}

type Train1Request struct {
	Request  *Train1RequestBody `request:"mediaType=multipart/form-data"`
	Security Train1Security
}

type Train1Response struct {
	ContentType   string
	StatusCode    int64
	TrainResponse *shared.TrainResponse
}
