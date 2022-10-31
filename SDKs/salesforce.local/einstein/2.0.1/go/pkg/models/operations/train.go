package operations

import (
"openapi/pkg/models/shared")

type TrainRequestBody struct {
    Algorithm *string `multipartForm:"name=algorithm"`
    DatasetID *int64 `multipartForm:"name=datasetId"`
    Epochs *int32 `multipartForm:"name=epochs"`
    LearningRate *float64 `multipartForm:"name=learningRate"`
    Name *string `multipartForm:"name=name"`
    TrainParams *shared.V2LanguageTrainParams `multipartForm:"name=trainParams,json"`
    
}

type TrainSecurity struct {
    BearerToken shared.SchemeBearerToken `security:"scheme,type=http,subtype=bearer"`
    
}

type TrainRequest struct {
    Request *TrainRequestBody `request:"mediaType=multipart/form-data"`
    Security TrainSecurity 
    
}

type TrainResponse struct {
    ContentType string 
    StatusCode int64 
    TrainResponse *shared.TrainResponse 
    
}

