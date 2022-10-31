package operations

import (
"openapi/pkg/models/shared")

type DeleteVideoFromGroupPathParams struct {
    GroupID float64 `pathParam:"style=simple,explode=false,name=group_id"`
    VideoID float64 `pathParam:"style=simple,explode=false,name=video_id"`
    
}

type DeleteVideoFromGroupSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type DeleteVideoFromGroupRequest struct {
    PathParams DeleteVideoFromGroupPathParams 
    Security DeleteVideoFromGroupSecurity 
    
}

type DeleteVideoFromGroupResponse struct {
    ContentType string 
    StatusCode int64 
    LegacyError *shared.LegacyError 
    
}

