package operations

import (
"openapi/pkg/models/shared")

type RemoveVideoFromProjectPathParams struct {
    ProjectID float64 `pathParam:"style=simple,explode=false,name=project_id"`
    UserID float64 `pathParam:"style=simple,explode=false,name=user_id"`
    VideoID float64 `pathParam:"style=simple,explode=false,name=video_id"`
    
}

type RemoveVideoFromProjectSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type RemoveVideoFromProjectRequest struct {
    PathParams RemoveVideoFromProjectPathParams 
    Security RemoveVideoFromProjectSecurity 
    
}

type RemoveVideoFromProjectResponse struct {
    ContentType string 
    StatusCode int64 
    Error *shared.Error 
    
}

