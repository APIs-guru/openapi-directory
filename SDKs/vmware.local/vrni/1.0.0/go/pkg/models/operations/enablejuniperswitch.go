package operations

import (
"openapi/pkg/models/shared")

type EnableJuniperSwitchPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type EnableJuniperSwitchSecurity struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type EnableJuniperSwitchRequest struct {
    PathParams EnableJuniperSwitchPathParams 
    Security EnableJuniperSwitchSecurity 
    
}

type EnableJuniperSwitchResponse struct {
    ContentType string 
    StatusCode int64 
    
}

