package operations

import (
"openapi/pkg/models/shared")

type GetAristaSwitchPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetAristaSwitchSecurity struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetAristaSwitchRequest struct {
    PathParams GetAristaSwitchPathParams 
    Security GetAristaSwitchSecurity 
    
}

type GetAristaSwitchResponse struct {
    ContentType string 
    StatusCode int64 
    SwitchDataSource *shared.SwitchDataSource 
    
}

