package operations

import (
"openapi/pkg/models/shared")

type RotateAccountOrganizationExportTokenPathParams struct {
    OrgID string `pathParam:"style=simple,explode=false,name=org_id"`
    
}

type RotateAccountOrganizationExportTokenSecurity struct {
    BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type RotateAccountOrganizationExportTokenRequest struct {
    PathParams RotateAccountOrganizationExportTokenPathParams 
    Security RotateAccountOrganizationExportTokenSecurity 
    
}

type RotateAccountOrganizationExportTokenResponse struct {
    ContentType string 
    Organization *shared.Organization 
    StatusCode int64 
    
}

