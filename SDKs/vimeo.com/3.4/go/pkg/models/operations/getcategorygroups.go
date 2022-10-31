package operations

import (
"openapi/pkg/models/shared")

type GetCategoryGroupsPathParams struct {
    Category string `pathParam:"style=simple,explode=false,name=category"`
    
}


type GetCategoryGroupsDirectionEnum string

const (
    GetCategoryGroupsDirectionEnumAsc GetCategoryGroupsDirectionEnum = "asc"
GetCategoryGroupsDirectionEnumDesc GetCategoryGroupsDirectionEnum = "desc"
)



type GetCategoryGroupsSortEnum string

const (
    GetCategoryGroupsSortEnumAlphabetical GetCategoryGroupsSortEnum = "alphabetical"
GetCategoryGroupsSortEnumDate GetCategoryGroupsSortEnum = "date"
GetCategoryGroupsSortEnumMembers GetCategoryGroupsSortEnum = "members"
GetCategoryGroupsSortEnumVideos GetCategoryGroupsSortEnum = "videos"
)


type GetCategoryGroupsQueryParams struct {
    Direction *GetCategoryGroupsDirectionEnum `queryParam:"style=form,explode=true,name=direction"`
    Page *float64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *float64 `queryParam:"style=form,explode=true,name=per_page"`
    Query *string `queryParam:"style=form,explode=true,name=query"`
    Sort *GetCategoryGroupsSortEnum `queryParam:"style=form,explode=true,name=sort"`
    
}

type GetCategoryGroupsRequest struct {
    PathParams GetCategoryGroupsPathParams 
    QueryParams GetCategoryGroupsQueryParams 
    
}

type GetCategoryGroupsResponse struct {
    ContentType string 
    StatusCode int64 
    Groups []shared.Group 
    LegacyError *shared.LegacyError 
    
}

