package operations

import (
"openapi/pkg/models/shared")

type AddHpvcManagerSecurity struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type AddHpvcManagerRequest struct {
    Request *shared.SwitchDataSource `request:"mediaType=application/json"`
    Security AddHpvcManagerSecurity 
    
}

type AddHpvcManagerResponse struct {
    APIError *shared.APIError 
    ContentType string 
    StatusCode int64 
    SwitchDataSource *shared.SwitchDataSource 
    
}

