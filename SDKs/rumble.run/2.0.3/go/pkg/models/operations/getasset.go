package operations

import (
"openapi/pkg/models/shared")

type GetAssetPathParams struct {
    AssetID string `pathParam:"style=simple,explode=false,name=asset_id"`
    
}

type GetAssetSecurity struct {
    BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type GetAssetRequest struct {
    PathParams GetAssetPathParams 
    Security GetAssetSecurity 
    
}

type GetAssetResponse struct {
    Asset *shared.Asset 
    ContentType string 
    StatusCode int64 
    
}

