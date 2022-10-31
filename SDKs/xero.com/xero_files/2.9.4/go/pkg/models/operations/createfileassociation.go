package operations

import (
"openapi/pkg/models/shared")

type CreateFileAssociationPathParams struct {
    FileID string `pathParam:"style=simple,explode=false,name=FileId"`
    
}

type CreateFileAssociationHeaders struct {
    XeroTenantID string `header:"style=simple,explode=false,name=xero-tenant-id"`
    
}

type CreateFileAssociationSecurity struct {
    OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
    
}

type CreateFileAssociationRequest struct {
    PathParams CreateFileAssociationPathParams 
    Headers CreateFileAssociationHeaders 
    Request *shared.Association `request:"mediaType=application/json"`
    Security CreateFileAssociationSecurity 
    
}

type CreateFileAssociationResponse struct {
    Association *shared.Association 
    ContentType string 
    StatusCode int64 
    
}

