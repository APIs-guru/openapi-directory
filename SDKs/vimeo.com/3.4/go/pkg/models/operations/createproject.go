package operations

import (
"openapi/pkg/models/shared")

type CreateProjectPathParams struct {
    UserID float64 `pathParam:"style=simple,explode=false,name=user_id"`
    
}

type CreateProjectRequestBody struct {
    Name string `json:"name"`
    
}

type CreateProjectSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type CreateProjectRequest struct {
    PathParams CreateProjectPathParams 
    Request CreateProjectRequestBody `request:"mediaType=application/json"`
    Security CreateProjectSecurity 
    
}

type CreateProjectResponse struct {
    ContentType string 
    StatusCode int64 
    Error *shared.Error 
    Project *shared.Project 
    
}

