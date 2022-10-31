package operations

import (
"openapi/pkg/models/shared")

type DeleteVodBackgroundPathParams struct {
    BackgroundID float64 `pathParam:"style=simple,explode=false,name=background_id"`
    OndemandID float64 `pathParam:"style=simple,explode=false,name=ondemand_id"`
    
}

type DeleteVodBackgroundSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type DeleteVodBackgroundRequest struct {
    PathParams DeleteVodBackgroundPathParams 
    Security DeleteVodBackgroundSecurity 
    
}

type DeleteVodBackgroundResponse struct {
    ContentType string 
    StatusCode int64 
    LegacyError *shared.LegacyError 
    Picture *shared.Picture 
    
}

