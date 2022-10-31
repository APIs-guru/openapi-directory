package operations

import (
"openapi/pkg/models/shared")

type GetVodRegionsPathParams struct {
    OndemandID float64 `pathParam:"style=simple,explode=false,name=ondemand_id"`
    
}

type GetVodRegionsRequest struct {
    PathParams GetVodRegionsPathParams 
    
}

type GetVodRegionsResponse struct {
    ContentType string 
    StatusCode int64 
    LegacyError *shared.LegacyError 
    OnDemandRegions []shared.OnDemandRegion 
    
}

