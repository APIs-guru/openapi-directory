package operations

import (
"openapi/pkg/models/shared")

type EnableNsxvManagerPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type EnableNsxvManagerSecurity struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type EnableNsxvManagerRequest struct {
    PathParams EnableNsxvManagerPathParams 
    Security EnableNsxvManagerSecurity 
    
}

type EnableNsxvManagerResponse struct {
    ContentType string 
    StatusCode int64 
    
}

