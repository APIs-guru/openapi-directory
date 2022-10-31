package operations

import (
"openapi/pkg/models/shared")

type UpdateOrganizationSecurity struct {
    BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type UpdateOrganizationRequest struct {
    Request shared.OrgOptions `request:"mediaType=application/json"`
    Security UpdateOrganizationSecurity 
    
}

type UpdateOrganizationResponse struct {
    ContentType string 
    Organization *shared.Organization 
    StatusCode int64 
    
}

