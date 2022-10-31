package operations

import (
"openapi/pkg/models/shared")

type DeleteVodPromotionPathParams struct {
    OndemandID float64 `pathParam:"style=simple,explode=false,name=ondemand_id"`
    PromotionID float64 `pathParam:"style=simple,explode=false,name=promotion_id"`
    
}

type DeleteVodPromotionSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type DeleteVodPromotionRequest struct {
    PathParams DeleteVodPromotionPathParams 
    Security DeleteVodPromotionSecurity 
    
}

type DeleteVodPromotionResponse struct {
    ContentType string 
    StatusCode int64 
    LegacyError *shared.LegacyError 
    
}

