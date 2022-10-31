package operations

import (
"openapi/pkg/models/shared")

type GetAssetByIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetAssetByIDHeaders struct {
    XeroTenantID string `header:"style=simple,explode=false,name=xero-tenant-id"`
    
}

type GetAssetByIDSecurity struct {
    OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
    
}

type GetAssetByIDRequest struct {
    PathParams GetAssetByIDPathParams 
    Headers GetAssetByIDHeaders 
    Security GetAssetByIDSecurity 
    
}

type GetAssetByIDResponse struct {
    Asset *shared.Asset 
    ContentType string 
    StatusCode int64 
    
}

