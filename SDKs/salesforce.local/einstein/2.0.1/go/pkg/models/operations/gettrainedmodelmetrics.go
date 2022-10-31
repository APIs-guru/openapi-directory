package operations

import (
"openapi/pkg/models/shared")

type GetTrainedModelMetricsPathParams struct {
    ModelID string `pathParam:"style=simple,explode=false,name=modelId"`
    
}

type GetTrainedModelMetricsSecurity struct {
    BearerToken shared.SchemeBearerToken `security:"scheme,type=http,subtype=bearer"`
    
}

type GetTrainedModelMetricsRequest struct {
    PathParams GetTrainedModelMetricsPathParams 
    Security GetTrainedModelMetricsSecurity 
    
}

type GetTrainedModelMetricsResponse struct {
    ContentType string 
    Metrics *shared.Metrics 
    StatusCode int64 
    
}

