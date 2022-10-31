package operations

import (
"openapi/pkg/models/shared")

type DisableUcsManagerPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type DisableUcsManagerSecurity struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type DisableUcsManagerRequest struct {
    PathParams DisableUcsManagerPathParams 
    Security DisableUcsManagerSecurity 
    
}

type DisableUcsManagerResponse struct {
    ContentType string 
    StatusCode int64 
    
}

