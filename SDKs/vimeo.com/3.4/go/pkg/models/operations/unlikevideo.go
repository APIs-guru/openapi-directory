package operations

import (
"openapi/pkg/models/shared")

type UnlikeVideoPathParams struct {
    UserID float64 `pathParam:"style=simple,explode=false,name=user_id"`
    VideoID float64 `pathParam:"style=simple,explode=false,name=video_id"`
    
}

type UnlikeVideoSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type UnlikeVideoRequest struct {
    PathParams UnlikeVideoPathParams 
    Security UnlikeVideoSecurity 
    
}

type UnlikeVideoResponse struct {
    ContentType string 
    StatusCode int64 
    LegacyError *shared.LegacyError 
    
}

