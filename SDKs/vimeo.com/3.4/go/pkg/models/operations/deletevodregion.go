package operations

import (
"openapi/pkg/models/shared")

type DeleteVodRegionPathParams struct {
    Country string `pathParam:"style=simple,explode=false,name=country"`
    OndemandID float64 `pathParam:"style=simple,explode=false,name=ondemand_id"`
    
}

type DeleteVodRegionSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type DeleteVodRegionRequest struct {
    PathParams DeleteVodRegionPathParams 
    Security DeleteVodRegionSecurity 
    
}

type DeleteVodRegionResponse struct {
    ContentType string 
    StatusCode int64 
    LegacyError *shared.LegacyError 
    
}

