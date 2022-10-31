package operations

import (
"openapi/pkg/models/shared")


type GetProjectsAlt1DirectionEnum string

const (
    GetProjectsAlt1DirectionEnumAsc GetProjectsAlt1DirectionEnum = "asc"
GetProjectsAlt1DirectionEnumDesc GetProjectsAlt1DirectionEnum = "desc"
)



type GetProjectsAlt1SortEnum string

const (
    GetProjectsAlt1SortEnumDate GetProjectsAlt1SortEnum = "date"
GetProjectsAlt1SortEnumDefault GetProjectsAlt1SortEnum = "default"
GetProjectsAlt1SortEnumModifiedTime GetProjectsAlt1SortEnum = "modified_time"
GetProjectsAlt1SortEnumName GetProjectsAlt1SortEnum = "name"
)


type GetProjectsAlt1QueryParams struct {
    Direction *GetProjectsAlt1DirectionEnum `queryParam:"style=form,explode=true,name=direction"`
    Page *float64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *float64 `queryParam:"style=form,explode=true,name=per_page"`
    Sort *GetProjectsAlt1SortEnum `queryParam:"style=form,explode=true,name=sort"`
    
}

type GetProjectsAlt1Security struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetProjectsAlt1Request struct {
    QueryParams GetProjectsAlt1QueryParams 
    Security GetProjectsAlt1Security 
    
}

type GetProjectsAlt1Response struct {
    ContentType string 
    StatusCode int64 
    Error *shared.Error 
    Projects []shared.Project 
    
}

