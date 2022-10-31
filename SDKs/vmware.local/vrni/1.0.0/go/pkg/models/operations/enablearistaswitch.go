package operations

import (
"openapi/pkg/models/shared")

type EnableAristaSwitchPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type EnableAristaSwitchSecurity struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type EnableAristaSwitchRequest struct {
    PathParams EnableAristaSwitchPathParams 
    Security EnableAristaSwitchSecurity 
    
}

type EnableAristaSwitchResponse struct {
    ContentType string 
    StatusCode int64 
    
}

