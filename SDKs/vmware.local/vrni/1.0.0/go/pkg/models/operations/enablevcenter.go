package operations

import (
"openapi/pkg/models/shared")

type EnableVcenterPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type EnableVcenterSecurity struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type EnableVcenterRequest struct {
    PathParams EnableVcenterPathParams 
    Security EnableVcenterSecurity 
    
}

type EnableVcenterResponse struct {
    ContentType string 
    StatusCode int64 
    
}

