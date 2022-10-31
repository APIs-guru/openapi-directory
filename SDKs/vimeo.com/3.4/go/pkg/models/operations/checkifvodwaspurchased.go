package operations

import (
"openapi/pkg/models/shared")

type CheckIfVodWasPurchasedPathParams struct {
    UserID float64 `pathParam:"style=simple,explode=false,name=user_id"`
    
}

type CheckIfVodWasPurchasedSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type CheckIfVodWasPurchasedRequest struct {
    PathParams CheckIfVodWasPurchasedPathParams 
    Security CheckIfVodWasPurchasedSecurity 
    
}

type CheckIfVodWasPurchasedResponse struct {
    ContentType string 
    StatusCode int64 
    LegacyError *shared.LegacyError 
    OnDemandPage *shared.OnDemandPage 
    
}

