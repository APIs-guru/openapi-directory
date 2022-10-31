package operations

import (
"openapi/pkg/models/shared")

type RemoveVideosFromProjectPathParams struct {
    ProjectID float64 `pathParam:"style=simple,explode=false,name=project_id"`
    UserID float64 `pathParam:"style=simple,explode=false,name=user_id"`
    
}

type RemoveVideosFromProjectQueryParams struct {
    ShouldDeleteClips *bool `queryParam:"style=form,explode=true,name=should_delete_clips"`
    Uris string `queryParam:"style=form,explode=true,name=uris"`
    
}

type RemoveVideosFromProjectSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type RemoveVideosFromProjectRequest struct {
    PathParams RemoveVideosFromProjectPathParams 
    QueryParams RemoveVideosFromProjectQueryParams 
    Security RemoveVideosFromProjectSecurity 
    
}

type RemoveVideosFromProjectResponse struct {
    ContentType string 
    StatusCode int64 
    Error *shared.Error 
    
}

