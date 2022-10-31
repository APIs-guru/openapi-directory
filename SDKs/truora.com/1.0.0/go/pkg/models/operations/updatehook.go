package operations

import (
"openapi/pkg/models/shared")

type UpdateHookPathParams struct {
    HookID string `pathParam:"style=simple,explode=false,name=hook_id"`
    
}

type UpdateHookSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type UpdateHookRequest struct {
    PathParams UpdateHookPathParams 
    Request shared.CreateHookInput `request:"mediaType=application/x-www-form-urlencoded"`
    Security UpdateHookSecurity 
    
}

type UpdateHookResponse struct {
    Body []byte 
    ContentType string 
    Error *interface{} 
    StatusCode int64 
    
}

