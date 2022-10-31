package operations

import (
"openapi/pkg/models/shared")

type GetVersionPathParams struct {
    VersionID string `pathParam:"style=simple,explode=false,name=versionId"`
    
}

type GetVersionSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=http,subtype=basic"`
    
}

type GetVersionRequest struct {
    PathParams GetVersionPathParams 
    Security GetVersionSecurity 
    
}

type GetVersionResponse struct {
    ContentType string 
    StatusCode int64 
    
}

