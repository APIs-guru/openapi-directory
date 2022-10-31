package operations

import (
"openapi/pkg/models/shared")

type GetVersionSecurity struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetVersionRequest struct {
    Security GetVersionSecurity 
    
}

type GetVersionResponse struct {
    ContentType string 
    StatusCode int64 
    VersionResponse *shared.VersionResponse 
    
}

