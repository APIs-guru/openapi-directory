package operations

import (
"openapi/pkg/models/shared")

type DisableNsxvManagerPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type DisableNsxvManagerSecurity struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type DisableNsxvManagerRequest struct {
    PathParams DisableNsxvManagerPathParams 
    Security DisableNsxvManagerSecurity 
    
}

type DisableNsxvManagerResponse struct {
    ContentType string 
    StatusCode int64 
    
}

