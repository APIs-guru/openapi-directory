package operations

import (
"openapi/pkg/models/shared")

type DisableVcenterPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type DisableVcenterSecurity struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type DisableVcenterRequest struct {
    PathParams DisableVcenterPathParams 
    Security DisableVcenterSecurity 
    
}

type DisableVcenterResponse struct {
    ContentType string 
    StatusCode int64 
    
}

