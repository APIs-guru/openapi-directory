package operations

import (
"openapi/pkg/models/shared")

type AddJuniperSwitchSecurity struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type AddJuniperSwitchRequest struct {
    Request *shared.SwitchDataSourceRequest `request:"mediaType=application/json"`
    Security AddJuniperSwitchSecurity 
    
}

type AddJuniperSwitchResponse struct {
    APIError *shared.APIError 
    ContentType string 
    StatusCode int64 
    SwitchDataSource *shared.SwitchDataSource 
    
}

