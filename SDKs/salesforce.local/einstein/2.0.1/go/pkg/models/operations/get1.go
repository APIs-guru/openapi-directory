package operations

import (
"openapi/pkg/models/shared")

type Get1PathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type Get1Security struct {
    BearerToken shared.SchemeBearerToken `security:"scheme,type=http,subtype=bearer"`
    
}

type Get1Request struct {
    PathParams Get1PathParams 
    Security Get1Security 
    
}

type Get1Response struct {
    ContentType string 
    DeletionResponse *shared.DeletionResponse 
    StatusCode int64 
    
}

