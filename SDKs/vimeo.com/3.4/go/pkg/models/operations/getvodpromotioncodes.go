package operations

import (
"openapi/pkg/models/shared")

type GetVodPromotionCodesPathParams struct {
    OndemandID float64 `pathParam:"style=simple,explode=false,name=ondemand_id"`
    PromotionID float64 `pathParam:"style=simple,explode=false,name=promotion_id"`
    
}

type GetVodPromotionCodesQueryParams struct {
    Page *float64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *float64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type GetVodPromotionCodesSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetVodPromotionCodesRequest struct {
    PathParams GetVodPromotionCodesPathParams 
    QueryParams GetVodPromotionCodesQueryParams 
    Security GetVodPromotionCodesSecurity 
    
}

type GetVodPromotionCodesResponse struct {
    ContentType string 
    StatusCode int64 
    LegacyError *shared.LegacyError 
    OnDemandPromotionCode *shared.OnDemandPromotionCode 
    
}

