package operations

import (
"openapi/pkg/models/shared")

type LikeVideoPathParams struct {
    UserID float64 `pathParam:"style=simple,explode=false,name=user_id"`
    VideoID float64 `pathParam:"style=simple,explode=false,name=video_id"`
    
}

type LikeVideoSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type LikeVideoRequest struct {
    PathParams LikeVideoPathParams 
    Security LikeVideoSecurity 
    
}

type LikeVideoResponse struct {
    ContentType string 
    StatusCode int64 
    LegacyError *shared.LegacyError 
    
}

