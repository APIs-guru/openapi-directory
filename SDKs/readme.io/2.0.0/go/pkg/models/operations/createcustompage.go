package operations

import (
"openapi/pkg/models/shared")

type CreateCustomPageSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=http,subtype=basic"`
    
}

type CreateCustomPageRequest struct {
    Request shared.CustomPage `request:"mediaType=application/json"`
    Security CreateCustomPageSecurity 
    
}

type CreateCustomPageResponse struct {
    ContentType string 
    StatusCode int64 
    
}

