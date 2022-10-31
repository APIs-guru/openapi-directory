package operations

import (
"openapi/pkg/models/shared")

type GetHpovManagerPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetHpovManagerSecurity struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetHpovManagerRequest struct {
    PathParams GetHpovManagerPathParams 
    Security GetHpovManagerSecurity 
    
}

type GetHpovManagerResponse struct {
    ContentType string 
    StatusCode int64 
    SwitchDataSource *shared.SwitchDataSource 
    
}

