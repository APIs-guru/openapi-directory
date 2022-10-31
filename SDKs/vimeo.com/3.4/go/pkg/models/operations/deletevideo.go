package operations

import (
"openapi/pkg/models/shared")

type DeleteVideoPathParams struct {
    VideoID float64 `pathParam:"style=simple,explode=false,name=video_id"`
    
}

type DeleteVideoSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type DeleteVideoRequest struct {
    PathParams DeleteVideoPathParams 
    Security DeleteVideoSecurity 
    
}

type DeleteVideoResponse struct {
    ContentType string 
    StatusCode int64 
    LegacyError *shared.LegacyError 
    
}

