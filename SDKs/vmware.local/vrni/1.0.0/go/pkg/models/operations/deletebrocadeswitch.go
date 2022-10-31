package operations

import (
"openapi/pkg/models/shared")

type DeleteBrocadeSwitchPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type DeleteBrocadeSwitchSecurity struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type DeleteBrocadeSwitchRequest struct {
    PathParams DeleteBrocadeSwitchPathParams 
    Security DeleteBrocadeSwitchSecurity 
    
}

type DeleteBrocadeSwitchResponse struct {
    ContentType string 
    StatusCode int64 
    
}

