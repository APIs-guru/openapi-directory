package operations

import (
"openapi/pkg/models/shared")

type GetUserFollowingPathParams struct {
    UserID float64 `pathParam:"style=simple,explode=false,name=user_id"`
    
}


type GetUserFollowingDirectionEnum string

const (
    GetUserFollowingDirectionEnumAsc GetUserFollowingDirectionEnum = "asc"
GetUserFollowingDirectionEnumDesc GetUserFollowingDirectionEnum = "desc"
)



type GetUserFollowingFilterEnum string

const (
    GetUserFollowingFilterEnumOnline GetUserFollowingFilterEnum = "online"
)



type GetUserFollowingSortEnum string

const (
    GetUserFollowingSortEnumAlphabetical GetUserFollowingSortEnum = "alphabetical"
GetUserFollowingSortEnumDate GetUserFollowingSortEnum = "date"
)


type GetUserFollowingQueryParams struct {
    Direction *GetUserFollowingDirectionEnum `queryParam:"style=form,explode=true,name=direction"`
    Filter *GetUserFollowingFilterEnum `queryParam:"style=form,explode=true,name=filter"`
    Page *float64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *float64 `queryParam:"style=form,explode=true,name=per_page"`
    Query *string `queryParam:"style=form,explode=true,name=query"`
    Sort *GetUserFollowingSortEnum `queryParam:"style=form,explode=true,name=sort"`
    
}

type GetUserFollowingRequest struct {
    PathParams GetUserFollowingPathParams 
    QueryParams GetUserFollowingQueryParams 
    
}

type GetUserFollowingResponse struct {
    ContentType string 
    StatusCode int64 
    Users []shared.User 
    
}

