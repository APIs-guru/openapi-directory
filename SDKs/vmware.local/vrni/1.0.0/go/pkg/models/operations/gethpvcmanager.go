package operations

import (
"openapi/pkg/models/shared")

type GetHpvcManagerPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetHpvcManagerSecurity struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetHpvcManagerRequest struct {
    PathParams GetHpvcManagerPathParams 
    Security GetHpvcManagerSecurity 
    
}

type GetHpvcManagerResponse struct {
    ContentType string 
    StatusCode int64 
    SwitchDataSource *shared.SwitchDataSource 
    
}

