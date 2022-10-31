package operations

import (
"openapi/pkg/models/shared")

type GetTrainedModelMetrics1PathParams struct {
    ModelID string `pathParam:"style=simple,explode=false,name=modelId"`
    
}

type GetTrainedModelMetrics1Security struct {
    BearerToken shared.SchemeBearerToken `security:"scheme,type=http,subtype=bearer"`
    
}

type GetTrainedModelMetrics1Request struct {
    PathParams GetTrainedModelMetrics1PathParams 
    Security GetTrainedModelMetrics1Security 
    
}

type GetTrainedModelMetrics1Response struct {
    ContentType string 
    Metrics *shared.Metrics 
    StatusCode int64 
    
}

