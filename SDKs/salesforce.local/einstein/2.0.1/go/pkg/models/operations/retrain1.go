package operations

import (
"openapi/pkg/models/shared")

type Retrain1RequestBody struct {
    Algorithm *string `multipartForm:"name=algorithm"`
    Epochs *int32 `multipartForm:"name=epochs"`
    LearningRate *float32 `multipartForm:"name=learningRate"`
    ModelID *string `multipartForm:"name=modelId"`
    TrainParams *shared.V2VisionTrainParams `multipartForm:"name=trainParams,json"`
    
}

type Retrain1Security struct {
    BearerToken shared.SchemeBearerToken `security:"scheme,type=http,subtype=bearer"`
    
}

type Retrain1Request struct {
    Request *Retrain1RequestBody `request:"mediaType=multipart/form-data"`
    Security Retrain1Security 
    
}

type Retrain1Response struct {
    ContentType string 
    StatusCode int64 
    TrainResponse *shared.TrainResponse 
    
}

