package operations

import (
"openapi/pkg/models/shared")

type DisableBrocadeSwitchPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type DisableBrocadeSwitchSecurity struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type DisableBrocadeSwitchRequest struct {
    PathParams DisableBrocadeSwitchPathParams 
    Security DisableBrocadeSwitchSecurity 
    
}

type DisableBrocadeSwitchResponse struct {
    ContentType string 
    StatusCode int64 
    
}

