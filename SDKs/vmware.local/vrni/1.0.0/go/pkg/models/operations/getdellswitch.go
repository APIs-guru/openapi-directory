package operations

import (
"openapi/pkg/models/shared")

type GetDellSwitchPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetDellSwitchSecurity struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetDellSwitchRequest struct {
    PathParams GetDellSwitchPathParams 
    Security GetDellSwitchSecurity 
    
}

type GetDellSwitchResponse struct {
    ContentType string 
    DellSwitchDataSource *shared.DellSwitchDataSource 
    StatusCode int64 
    
}

