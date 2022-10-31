package operations

import (
"openapi/pkg/models/shared")

type GetProjectVideosAlt1PathParams struct {
    ProjectID float64 `pathParam:"style=simple,explode=false,name=project_id"`
    
}


type GetProjectVideosAlt1DirectionEnum string

const (
    GetProjectVideosAlt1DirectionEnumAsc GetProjectVideosAlt1DirectionEnum = "asc"
GetProjectVideosAlt1DirectionEnumDesc GetProjectVideosAlt1DirectionEnum = "desc"
)



type GetProjectVideosAlt1SortEnum string

const (
    GetProjectVideosAlt1SortEnumAlphabetical GetProjectVideosAlt1SortEnum = "alphabetical"
GetProjectVideosAlt1SortEnumDate GetProjectVideosAlt1SortEnum = "date"
GetProjectVideosAlt1SortEnumDefault GetProjectVideosAlt1SortEnum = "default"
GetProjectVideosAlt1SortEnumDuration GetProjectVideosAlt1SortEnum = "duration"
GetProjectVideosAlt1SortEnumLastUserActionEventDate GetProjectVideosAlt1SortEnum = "last_user_action_event_date"
)


type GetProjectVideosAlt1QueryParams struct {
    Direction *GetProjectVideosAlt1DirectionEnum `queryParam:"style=form,explode=true,name=direction"`
    Page *float64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *float64 `queryParam:"style=form,explode=true,name=per_page"`
    Sort *GetProjectVideosAlt1SortEnum `queryParam:"style=form,explode=true,name=sort"`
    
}

type GetProjectVideosAlt1Security struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetProjectVideosAlt1Request struct {
    PathParams GetProjectVideosAlt1PathParams 
    QueryParams GetProjectVideosAlt1QueryParams 
    Security GetProjectVideosAlt1Security 
    
}

type GetProjectVideosAlt1Response struct {
    ContentType string 
    StatusCode int64 
    Error *shared.Error 
    Videos []shared.Video 
    
}

