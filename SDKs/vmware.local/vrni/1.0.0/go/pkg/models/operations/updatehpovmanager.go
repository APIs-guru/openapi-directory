package operations

import (
"openapi/pkg/models/shared")

type UpdateHpovManagerPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type UpdateHpovManagerSecurity struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type UpdateHpovManagerRequest struct {
    PathParams UpdateHpovManagerPathParams 
    Request *shared.SwitchDataSource `request:"mediaType=application/json"`
    Security UpdateHpovManagerSecurity 
    
}

type UpdateHpovManagerResponse struct {
    APIError *shared.APIError 
    ContentType string 
    StatusCode int64 
    SwitchDataSource *shared.SwitchDataSource 
    
}

