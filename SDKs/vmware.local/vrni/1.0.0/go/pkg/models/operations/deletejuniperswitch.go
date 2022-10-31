package operations

import (
"openapi/pkg/models/shared")

type DeleteJuniperSwitchPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type DeleteJuniperSwitchSecurity struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type DeleteJuniperSwitchRequest struct {
    PathParams DeleteJuniperSwitchPathParams 
    Security DeleteJuniperSwitchSecurity 
    
}

type DeleteJuniperSwitchResponse struct {
    ContentType string 
    StatusCode int64 
    
}

