package operations

import (
"openapi/pkg/models/shared")

type AddHpovManagerSecurity struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type AddHpovManagerRequest struct {
    Request *shared.SwitchDataSource `request:"mediaType=application/json"`
    Security AddHpovManagerSecurity 
    
}

type AddHpovManagerResponse struct {
    APIError *shared.APIError 
    ContentType string 
    StatusCode int64 
    SwitchDataSource *shared.SwitchDataSource 
    
}

