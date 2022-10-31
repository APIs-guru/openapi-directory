package operations

import (
"openapi/pkg/models/shared")

type SetVodRegionsPathParams struct {
    OndemandID float64 `pathParam:"style=simple,explode=false,name=ondemand_id"`
    
}

type SetVodRegionsRequestBody struct {
    Countries []string `json:"countries"`
    
}

type SetVodRegionsSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type SetVodRegionsRequest struct {
    PathParams SetVodRegionsPathParams 
    Request SetVodRegionsRequestBody `request:"mediaType=application/vnd.vimeo.ondemand.region+json"`
    Security SetVodRegionsSecurity 
    
}

type SetVodRegionsResponse struct {
    ContentType string 
    StatusCode int64 
    LegacyError *shared.LegacyError 
    OnDemandRegion *shared.OnDemandRegion 
    
}

