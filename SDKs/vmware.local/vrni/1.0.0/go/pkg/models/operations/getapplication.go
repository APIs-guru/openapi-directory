package operations

import (
"openapi/pkg/models/shared")

type GetApplicationPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetApplicationSecurity struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetApplicationRequest struct {
    PathParams GetApplicationPathParams 
    Security GetApplicationSecurity 
    
}

type GetApplicationResponse struct {
    Application *shared.Application 
    ContentType string 
    StatusCode int64 
    
}

