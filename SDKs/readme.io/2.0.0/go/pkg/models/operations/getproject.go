package operations

import (
"openapi/pkg/models/shared")

type GetProjectSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=http,subtype=basic"`
    
}

type GetProjectRequest struct {
    Security GetProjectSecurity 
    
}

type GetProjectResponse struct {
    ContentType string 
    StatusCode int64 
    
}

