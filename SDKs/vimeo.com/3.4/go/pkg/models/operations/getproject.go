package operations

import (
"openapi/pkg/models/shared")

type GetProjectPathParams struct {
    ProjectID float64 `pathParam:"style=simple,explode=false,name=project_id"`
    UserID float64 `pathParam:"style=simple,explode=false,name=user_id"`
    
}

type GetProjectSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetProjectRequest struct {
    PathParams GetProjectPathParams 
    Security GetProjectSecurity 
    
}

type GetProjectResponse struct {
    ContentType string 
    StatusCode int64 
    Error *shared.Error 
    Project *shared.Project 
    
}

