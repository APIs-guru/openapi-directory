package operations

import (
"openapi/pkg/models/shared")

type DisableJuniperSwitchPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type DisableJuniperSwitchSecurity struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type DisableJuniperSwitchRequest struct {
    PathParams DisableJuniperSwitchPathParams 
    Security DisableJuniperSwitchSecurity 
    
}

type DisableJuniperSwitchResponse struct {
    ContentType string 
    StatusCode int64 
    
}

