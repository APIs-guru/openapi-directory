package operations

import (
"openapi/pkg/models/shared")

type DeleteModelPathParams struct {
    ModelID string `pathParam:"style=simple,explode=false,name=modelId"`
    
}

type DeleteModelSecurity struct {
    BearerToken shared.SchemeBearerToken `security:"scheme,type=http,subtype=bearer"`
    
}

type DeleteModelRequest struct {
    PathParams DeleteModelPathParams 
    Security DeleteModelSecurity 
    
}

type DeleteModelResponse struct {
    ContentType string 
    DeletionResponse *shared.DeletionResponse 
    StatusCode int64 
    
}

