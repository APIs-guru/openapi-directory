package operations

import (
"openapi/pkg/models/shared")

type DeleteProjectPathParams struct {
    ProjectID float64 `pathParam:"style=simple,explode=false,name=project_id"`
    UserID float64 `pathParam:"style=simple,explode=false,name=user_id"`
    
}

type DeleteProjectQueryParams struct {
    ShouldDeleteClips *bool `queryParam:"style=form,explode=true,name=should_delete_clips"`
    
}

type DeleteProjectSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type DeleteProjectRequest struct {
    PathParams DeleteProjectPathParams 
    QueryParams DeleteProjectQueryParams 
    Security DeleteProjectSecurity 
    
}

type DeleteProjectResponse struct {
    ContentType string 
    StatusCode int64 
    Error *shared.Error 
    
}

