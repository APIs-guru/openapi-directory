package operations

import (
"openapi/pkg/models/shared")

type DeleteVcenterPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type DeleteVcenterSecurity struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type DeleteVcenterRequest struct {
    PathParams DeleteVcenterPathParams 
    Security DeleteVcenterSecurity 
    
}

type DeleteVcenterResponse struct {
    ContentType string 
    StatusCode int64 
    
}

