package operations

import (
"openapi/pkg/models/shared")

type UpdateJuniperSwitchPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type UpdateJuniperSwitchSecurity struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type UpdateJuniperSwitchRequest struct {
    PathParams UpdateJuniperSwitchPathParams 
    Request *shared.SwitchDataSource `request:"mediaType=application/json"`
    Security UpdateJuniperSwitchSecurity 
    
}

type UpdateJuniperSwitchResponse struct {
    APIError *shared.APIError 
    ContentType string 
    StatusCode int64 
    SwitchDataSource *shared.SwitchDataSource 
    
}

