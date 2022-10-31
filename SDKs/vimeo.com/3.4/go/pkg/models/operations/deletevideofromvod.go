package operations

import (
"openapi/pkg/models/shared")

type DeleteVideoFromVodPathParams struct {
    OndemandID float64 `pathParam:"style=simple,explode=false,name=ondemand_id"`
    VideoID float64 `pathParam:"style=simple,explode=false,name=video_id"`
    
}

type DeleteVideoFromVodSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type DeleteVideoFromVodRequest struct {
    PathParams DeleteVideoFromVodPathParams 
    Security DeleteVideoFromVodSecurity 
    
}

type DeleteVideoFromVodResponse struct {
    ContentType string 
    StatusCode int64 
    LegacyError *shared.LegacyError 
    
}

