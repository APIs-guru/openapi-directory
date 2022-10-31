package operations

import (
"openapi/pkg/models/shared")

type AddVideoToProjectAlt1PathParams struct {
    ProjectID float64 `pathParam:"style=simple,explode=false,name=project_id"`
    VideoID float64 `pathParam:"style=simple,explode=false,name=video_id"`
    
}

type AddVideoToProjectAlt1Security struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type AddVideoToProjectAlt1Request struct {
    PathParams AddVideoToProjectAlt1PathParams 
    Security AddVideoToProjectAlt1Security 
    
}

type AddVideoToProjectAlt1Response struct {
    ContentType string 
    StatusCode int64 
    Error *shared.Error 
    
}

