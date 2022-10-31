package operations

import (
"openapi/pkg/models/shared")

type DisableHpovManagerPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type DisableHpovManagerSecurity struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type DisableHpovManagerRequest struct {
    PathParams DisableHpovManagerPathParams 
    Security DisableHpovManagerSecurity 
    
}

type DisableHpovManagerResponse struct {
    ContentType string 
    StatusCode int64 
    
}

