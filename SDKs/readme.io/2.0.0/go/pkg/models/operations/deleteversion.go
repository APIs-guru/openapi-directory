package operations

import (
"openapi/pkg/models/shared")

type DeleteVersionPathParams struct {
    VersionID string `pathParam:"style=simple,explode=false,name=versionId"`
    
}

type DeleteVersionSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=http,subtype=basic"`
    
}

type DeleteVersionRequest struct {
    PathParams DeleteVersionPathParams 
    Security DeleteVersionSecurity 
    
}

type DeleteVersionResponse struct {
    ContentType string 
    StatusCode int64 
    
}

