package operations

import (
"openapi/pkg/models/shared")

type CreateVersionSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=http,subtype=basic"`
    
}

type CreateVersionRequest struct {
    Request shared.Version `request:"mediaType=application/json"`
    Security CreateVersionSecurity 
    
}

type CreateVersionResponse struct {
    ContentType string 
    StatusCode int64 
    
}

