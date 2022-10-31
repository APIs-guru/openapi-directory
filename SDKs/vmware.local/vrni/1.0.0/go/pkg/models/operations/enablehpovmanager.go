package operations

import (
"openapi/pkg/models/shared")

type EnableHpovManagerPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type EnableHpovManagerSecurity struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type EnableHpovManagerRequest struct {
    PathParams EnableHpovManagerPathParams 
    Security EnableHpovManagerSecurity 
    
}

type EnableHpovManagerResponse struct {
    ContentType string 
    StatusCode int64 
    
}

