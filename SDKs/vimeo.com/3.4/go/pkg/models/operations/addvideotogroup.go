package operations

import (
"openapi/pkg/models/shared")

type AddVideoToGroupPathParams struct {
    GroupID float64 `pathParam:"style=simple,explode=false,name=group_id"`
    VideoID float64 `pathParam:"style=simple,explode=false,name=video_id"`
    
}

type AddVideoToGroupSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type AddVideoToGroupRequest struct {
    PathParams AddVideoToGroupPathParams 
    Security AddVideoToGroupSecurity 
    
}

type AddVideoToGroupResponse struct {
    ContentType string 
    StatusCode int64 
    LegacyError *shared.LegacyError 
    Video *shared.Video 
    
}

