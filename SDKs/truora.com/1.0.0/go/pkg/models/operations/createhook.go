package operations

import (
"openapi/pkg/models/shared")

type CreateHookSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type CreateHookRequest struct {
    Request shared.CreateHookInput `request:"mediaType=application/x-www-form-urlencoded"`
    Security CreateHookSecurity 
    
}

type CreateHookResponse struct {
    ContentType string 
    Hook *shared.Hook 
    StatusCode int64 
    
}

