package operations

import (
"openapi/pkg/models/shared")

type GetOrganizationSecurity struct {
    BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type GetOrganizationRequest struct {
    Security GetOrganizationSecurity 
    
}

type GetOrganizationResponse struct {
    ContentType string 
    Organization *shared.Organization 
    StatusCode int64 
    
}

