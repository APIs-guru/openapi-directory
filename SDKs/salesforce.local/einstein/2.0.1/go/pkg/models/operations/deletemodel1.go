package operations

import (
"openapi/pkg/models/shared")

type DeleteModel1PathParams struct {
    ModelID string `pathParam:"style=simple,explode=false,name=modelId"`
    
}

type DeleteModel1Security struct {
    BearerToken shared.SchemeBearerToken `security:"scheme,type=http,subtype=bearer"`
    
}

type DeleteModel1Request struct {
    PathParams DeleteModel1PathParams 
    Security DeleteModel1Security 
    
}

type DeleteModel1Response struct {
    ContentType string 
    DeletionResponse *shared.DeletionResponse 
    StatusCode int64 
    
}

