package operations

import (
"openapi/pkg/models/shared")

type DeletHookPathParams struct {
    HookID string `pathParam:"style=simple,explode=false,name=hook_id"`
    
}

type DeletHookSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type DeletHookRequest struct {
    PathParams DeletHookPathParams 
    Security DeletHookSecurity 
    
}

type DeletHookResponse struct {
    ContentType string 
    StatusCode int64 
    DeletHook200ApplicationJSONString *string 
    
}

