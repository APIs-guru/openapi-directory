package operations

import (
"openapi/pkg/models/shared")

type DeleteAssetPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type DeleteAssetSecurity struct {
    DeveloperKey shared.SchemeDeveloperKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type DeleteAssetRequest struct {
    PathParams DeleteAssetPathParams 
    Security DeleteAssetSecurity 
    
}

type DeleteAssetResponse struct {
    ContentType string 
    StatusCode int64 
    
}

