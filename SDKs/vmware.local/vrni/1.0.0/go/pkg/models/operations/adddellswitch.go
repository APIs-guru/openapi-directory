package operations

import (
"openapi/pkg/models/shared")

type AddDellSwitchSecurity struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type AddDellSwitchRequest struct {
    Request *shared.DellSwitchDataSourceRequest `request:"mediaType=application/json"`
    Security AddDellSwitchSecurity 
    
}

type AddDellSwitchResponse struct {
    APIError *shared.APIError 
    ContentType string 
    DellSwitchDataSource *shared.DellSwitchDataSource 
    StatusCode int64 
    
}

