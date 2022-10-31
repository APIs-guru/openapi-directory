package operations

import (
"openapi/pkg/models/shared")

type GetVodPromotionPathParams struct {
    OndemandID float64 `pathParam:"style=simple,explode=false,name=ondemand_id"`
    PromotionID float64 `pathParam:"style=simple,explode=false,name=promotion_id"`
    
}

type GetVodPromotionSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetVodPromotionRequest struct {
    PathParams GetVodPromotionPathParams 
    Security GetVodPromotionSecurity 
    
}

type GetVodPromotionResponse struct {
    ContentType string 
    StatusCode int64 
    LegacyError *shared.LegacyError 
    OnDemandPromotion *shared.OnDemandPromotion 
    
}

