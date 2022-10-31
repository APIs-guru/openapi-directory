package operations

import (
"openapi/pkg/models/shared")

type GetFollowersPathParams struct {
    UserID float64 `pathParam:"style=simple,explode=false,name=user_id"`
    
}


type GetFollowersDirectionEnum string

const (
    GetFollowersDirectionEnumAsc GetFollowersDirectionEnum = "asc"
GetFollowersDirectionEnumDesc GetFollowersDirectionEnum = "desc"
)



type GetFollowersSortEnum string

const (
    GetFollowersSortEnumAlphabetical GetFollowersSortEnum = "alphabetical"
GetFollowersSortEnumDate GetFollowersSortEnum = "date"
)


type GetFollowersQueryParams struct {
    Direction *GetFollowersDirectionEnum `queryParam:"style=form,explode=true,name=direction"`
    Page *float64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *float64 `queryParam:"style=form,explode=true,name=per_page"`
    Query *string `queryParam:"style=form,explode=true,name=query"`
    Sort *GetFollowersSortEnum `queryParam:"style=form,explode=true,name=sort"`
    
}

type GetFollowersRequest struct {
    PathParams GetFollowersPathParams 
    QueryParams GetFollowersQueryParams 
    
}

type GetFollowersResponse struct {
    ContentType string 
    StatusCode int64 
    Users []shared.User 
    
}

