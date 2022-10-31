package operations

import (
"openapi/pkg/models/shared")

type CreateAssetHeaders struct {
    XeroTenantID string `header:"style=simple,explode=false,name=xero-tenant-id"`
    
}

type CreateAssetSecurity struct {
    OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
    
}

type CreateAssetRequest struct {
    Headers CreateAssetHeaders 
    Request shared.Asset `request:"mediaType=application/json"`
    Security CreateAssetSecurity 
    
}

type CreateAssetResponse struct {
    Asset *shared.Asset 
    ContentType string 
    StatusCode int64 
    
}

