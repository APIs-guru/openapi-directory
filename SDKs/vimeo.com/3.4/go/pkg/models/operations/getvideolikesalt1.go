package operations

import (
"openapi/pkg/models/shared")

type GetVideoLikesAlt1PathParams struct {
    ChannelID float64 `pathParam:"style=simple,explode=false,name=channel_id"`
    VideoID float64 `pathParam:"style=simple,explode=false,name=video_id"`
    
}


type GetVideoLikesAlt1DirectionEnum string

const (
    GetVideoLikesAlt1DirectionEnumAsc GetVideoLikesAlt1DirectionEnum = "asc"
GetVideoLikesAlt1DirectionEnumDesc GetVideoLikesAlt1DirectionEnum = "desc"
)



type GetVideoLikesAlt1SortEnum string

const (
    GetVideoLikesAlt1SortEnumAlphabetical GetVideoLikesAlt1SortEnum = "alphabetical"
GetVideoLikesAlt1SortEnumDate GetVideoLikesAlt1SortEnum = "date"
)


type GetVideoLikesAlt1QueryParams struct {
    Direction *GetVideoLikesAlt1DirectionEnum `queryParam:"style=form,explode=true,name=direction"`
    Page *float64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *float64 `queryParam:"style=form,explode=true,name=per_page"`
    Sort *GetVideoLikesAlt1SortEnum `queryParam:"style=form,explode=true,name=sort"`
    
}

type GetVideoLikesAlt1Request struct {
    PathParams GetVideoLikesAlt1PathParams 
    QueryParams GetVideoLikesAlt1QueryParams 
    
}

type GetVideoLikesAlt1Response struct {
    ContentType string 
    StatusCode int64 
    Users []shared.User 
    
}

