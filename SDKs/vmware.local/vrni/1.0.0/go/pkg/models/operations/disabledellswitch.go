package operations

import (
"openapi/pkg/models/shared")

type DisableDellSwitchPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type DisableDellSwitchSecurity struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type DisableDellSwitchRequest struct {
    PathParams DisableDellSwitchPathParams 
    Security DisableDellSwitchSecurity 
    
}

type DisableDellSwitchResponse struct {
    ContentType string 
    StatusCode int64 
    
}

