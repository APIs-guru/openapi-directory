package operations

import (
"openapi/pkg/models/shared")

type AddCiscoSwitchSecurity struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type AddCiscoSwitchRequest struct {
    Request *shared.CiscoSwitchDataSourceRequest `request:"mediaType=application/json"`
    Security AddCiscoSwitchSecurity 
    
}

type AddCiscoSwitchResponse struct {
    APIError *shared.APIError 
    CiscoSwitchDataSource *shared.CiscoSwitchDataSource 
    ContentType string 
    StatusCode int64 
    
}

