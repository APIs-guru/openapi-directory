package operations

import (
"openapi/pkg/models/shared")

type DeleteNsxvManagerPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type DeleteNsxvManagerSecurity struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type DeleteNsxvManagerRequest struct {
    PathParams DeleteNsxvManagerPathParams 
    Security DeleteNsxvManagerSecurity 
    
}

type DeleteNsxvManagerResponse struct {
    ContentType string 
    StatusCode int64 
    
}

