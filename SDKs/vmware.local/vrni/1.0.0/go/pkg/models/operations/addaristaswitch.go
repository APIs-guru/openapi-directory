package operations

import (
"openapi/pkg/models/shared")

type AddAristaSwitchSecurity struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type AddAristaSwitchRequest struct {
    Request *shared.SwitchDataSourceRequest `request:"mediaType=application/json"`
    Security AddAristaSwitchSecurity 
    
}

type AddAristaSwitchResponse struct {
    APIError *shared.APIError 
    ContentType string 
    StatusCode int64 
    SwitchDataSource *shared.SwitchDataSource 
    
}

