package operations

import (
"openapi/pkg/models/shared")

type GetTrainStatusAndProgress1PathParams struct {
    ModelID string `pathParam:"style=simple,explode=false,name=modelId"`
    
}

type GetTrainStatusAndProgress1Security struct {
    BearerToken shared.SchemeBearerToken `security:"scheme,type=http,subtype=bearer"`
    
}

type GetTrainStatusAndProgress1Request struct {
    PathParams GetTrainStatusAndProgress1PathParams 
    Security GetTrainStatusAndProgress1Security 
    
}

type GetTrainStatusAndProgress1Response struct {
    ContentType string 
    StatusCode int64 
    TrainResponse *shared.TrainResponse 
    
}

