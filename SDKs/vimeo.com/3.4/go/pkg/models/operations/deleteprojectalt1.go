package operations

import (
"openapi/pkg/models/shared")

type DeleteProjectAlt1PathParams struct {
    ProjectID float64 `pathParam:"style=simple,explode=false,name=project_id"`
    
}

type DeleteProjectAlt1QueryParams struct {
    ShouldDeleteClips *bool `queryParam:"style=form,explode=true,name=should_delete_clips"`
    
}

type DeleteProjectAlt1Security struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type DeleteProjectAlt1Request struct {
    PathParams DeleteProjectAlt1PathParams 
    QueryParams DeleteProjectAlt1QueryParams 
    Security DeleteProjectAlt1Security 
    
}

type DeleteProjectAlt1Response struct {
    ContentType string 
    StatusCode int64 
    Error *shared.Error 
    
}

