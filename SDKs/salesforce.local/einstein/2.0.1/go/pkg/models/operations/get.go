package operations

import (
"openapi/pkg/models/shared")

type GetPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetSecurity struct {
    BearerToken shared.SchemeBearerToken `security:"scheme,type=http,subtype=bearer"`
    
}

type GetRequest struct {
    PathParams GetPathParams 
    Security GetSecurity 
    
}

type GetResponse struct {
    ContentType string 
    DeletionResponse *shared.DeletionResponse 
    StatusCode int64 
    
}

