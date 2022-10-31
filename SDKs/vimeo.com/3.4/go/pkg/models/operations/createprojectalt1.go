package operations

import (
"openapi/pkg/models/shared")

type CreateProjectAlt1RequestBody struct {
    Name string `json:"name"`
    
}

type CreateProjectAlt1Security struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type CreateProjectAlt1Request struct {
    Request CreateProjectAlt1RequestBody `request:"mediaType=application/json"`
    Security CreateProjectAlt1Security 
    
}

type CreateProjectAlt1Response struct {
    ContentType string 
    StatusCode int64 
    Error *shared.Error 
    Project *shared.Project 
    
}

