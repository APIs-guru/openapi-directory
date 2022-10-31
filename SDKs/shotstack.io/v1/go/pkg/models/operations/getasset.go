package operations

import (
"openapi/pkg/models/shared")

type GetAssetPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetAssetSecurity struct {
    DeveloperKey shared.SchemeDeveloperKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetAssetRequest struct {
    PathParams GetAssetPathParams 
    Security GetAssetSecurity 
    
}

type GetAssetResponse struct {
    AssetResponse *shared.AssetResponse 
    ContentType string 
    StatusCode int64 
    
}

