package operations

import (
"openapi/pkg/models/shared")

type GetGenreVodsPathParams struct {
    GenreID string `pathParam:"style=simple,explode=false,name=genre_id"`
    
}


type GetGenreVodsDirectionEnum string

const (
    GetGenreVodsDirectionEnumAsc GetGenreVodsDirectionEnum = "asc"
GetGenreVodsDirectionEnumDesc GetGenreVodsDirectionEnum = "desc"
)



type GetGenreVodsFilterEnum string

const (
    GetGenreVodsFilterEnumCountry GetGenreVodsFilterEnum = "country"
GetGenreVodsFilterEnumMyRegion GetGenreVodsFilterEnum = "my_region"
)



type GetGenreVodsSortEnum string

const (
    GetGenreVodsSortEnumAlphabetical GetGenreVodsSortEnum = "alphabetical"
GetGenreVodsSortEnumDate GetGenreVodsSortEnum = "date"
GetGenreVodsSortEnumName GetGenreVodsSortEnum = "name"
GetGenreVodsSortEnumPublishTime GetGenreVodsSortEnum = "publish.time"
GetGenreVodsSortEnumVideos GetGenreVodsSortEnum = "videos"
)


type GetGenreVodsQueryParams struct {
    Direction *GetGenreVodsDirectionEnum `queryParam:"style=form,explode=true,name=direction"`
    Filter *GetGenreVodsFilterEnum `queryParam:"style=form,explode=true,name=filter"`
    Page *float64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *float64 `queryParam:"style=form,explode=true,name=per_page"`
    Query *string `queryParam:"style=form,explode=true,name=query"`
    Sort *GetGenreVodsSortEnum `queryParam:"style=form,explode=true,name=sort"`
    
}

type GetGenreVodsRequest struct {
    PathParams GetGenreVodsPathParams 
    QueryParams GetGenreVodsQueryParams 
    
}

type GetGenreVodsResponse struct {
    ContentType string 
    StatusCode int64 
    OnDemandPages []shared.OnDemandPage 
    
}

