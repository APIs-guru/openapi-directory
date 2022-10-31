package operations

import (
"openapi/pkg/models/shared")

type EnableHpvcManagerPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type EnableHpvcManagerSecurity struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type EnableHpvcManagerRequest struct {
    PathParams EnableHpvcManagerPathParams 
    Security EnableHpvcManagerSecurity 
    
}

type EnableHpvcManagerResponse struct {
    ContentType string 
    StatusCode int64 
    
}

