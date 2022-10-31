package operations

import (
"openapi/pkg/models/shared")

type CreateChangelogSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=http,subtype=basic"`
    
}

type CreateChangelogRequest struct {
    Request shared.Changelog `request:"mediaType=application/json"`
    Security CreateChangelogSecurity 
    
}

type CreateChangelogResponse struct {
    ContentType string 
    StatusCode int64 
    
}

