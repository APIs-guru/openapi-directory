package operations

import (
"openapi/pkg/models/shared")

type GetProjectsPathParams struct {
    UserID float64 `pathParam:"style=simple,explode=false,name=user_id"`
    
}


type GetProjectsDirectionEnum string

const (
    GetProjectsDirectionEnumAsc GetProjectsDirectionEnum = "asc"
GetProjectsDirectionEnumDesc GetProjectsDirectionEnum = "desc"
)



type GetProjectsSortEnum string

const (
    GetProjectsSortEnumDate GetProjectsSortEnum = "date"
GetProjectsSortEnumDefault GetProjectsSortEnum = "default"
GetProjectsSortEnumModifiedTime GetProjectsSortEnum = "modified_time"
GetProjectsSortEnumName GetProjectsSortEnum = "name"
)


type GetProjectsQueryParams struct {
    Direction *GetProjectsDirectionEnum `queryParam:"style=form,explode=true,name=direction"`
    Page *float64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *float64 `queryParam:"style=form,explode=true,name=per_page"`
    Sort *GetProjectsSortEnum `queryParam:"style=form,explode=true,name=sort"`
    
}

type GetProjectsSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetProjectsRequest struct {
    PathParams GetProjectsPathParams 
    QueryParams GetProjectsQueryParams 
    Security GetProjectsSecurity 
    
}

type GetProjectsResponse struct {
    ContentType string 
    StatusCode int64 
    Error *shared.Error 
    Projects []shared.Project 
    
}

