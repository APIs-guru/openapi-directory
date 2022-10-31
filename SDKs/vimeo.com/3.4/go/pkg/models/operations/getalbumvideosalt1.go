package operations

import (
"openapi/pkg/models/shared")

type GetAlbumVideosAlt1PathParams struct {
    AlbumID float64 `pathParam:"style=simple,explode=false,name=album_id"`
    
}


type GetAlbumVideosAlt1DirectionEnum string

const (
    GetAlbumVideosAlt1DirectionEnumAsc GetAlbumVideosAlt1DirectionEnum = "asc"
GetAlbumVideosAlt1DirectionEnumDesc GetAlbumVideosAlt1DirectionEnum = "desc"
)



type GetAlbumVideosAlt1FilterEnum string

const (
    GetAlbumVideosAlt1FilterEnumEmbeddable GetAlbumVideosAlt1FilterEnum = "embeddable"
)



type GetAlbumVideosAlt1SortEnum string

const (
    GetAlbumVideosAlt1SortEnumAlphabetical GetAlbumVideosAlt1SortEnum = "alphabetical"
GetAlbumVideosAlt1SortEnumComments GetAlbumVideosAlt1SortEnum = "comments"
GetAlbumVideosAlt1SortEnumDate GetAlbumVideosAlt1SortEnum = "date"
GetAlbumVideosAlt1SortEnumDefault GetAlbumVideosAlt1SortEnum = "default"
GetAlbumVideosAlt1SortEnumDuration GetAlbumVideosAlt1SortEnum = "duration"
GetAlbumVideosAlt1SortEnumLikes GetAlbumVideosAlt1SortEnum = "likes"
GetAlbumVideosAlt1SortEnumManual GetAlbumVideosAlt1SortEnum = "manual"
GetAlbumVideosAlt1SortEnumModifiedTime GetAlbumVideosAlt1SortEnum = "modified_time"
GetAlbumVideosAlt1SortEnumPlays GetAlbumVideosAlt1SortEnum = "plays"
)


type GetAlbumVideosAlt1QueryParams struct {
    ContainingURI *string `queryParam:"style=form,explode=true,name=containing_uri"`
    Direction *GetAlbumVideosAlt1DirectionEnum `queryParam:"style=form,explode=true,name=direction"`
    Filter *GetAlbumVideosAlt1FilterEnum `queryParam:"style=form,explode=true,name=filter"`
    FilterEmbeddable *bool `queryParam:"style=form,explode=true,name=filter_embeddable"`
    Page *float64 `queryParam:"style=form,explode=true,name=page"`
    Password *string `queryParam:"style=form,explode=true,name=password"`
    PerPage *float64 `queryParam:"style=form,explode=true,name=per_page"`
    Query *string `queryParam:"style=form,explode=true,name=query"`
    Sort *GetAlbumVideosAlt1SortEnum `queryParam:"style=form,explode=true,name=sort"`
    WeakSearch *bool `queryParam:"style=form,explode=true,name=weak_search"`
    
}

type GetAlbumVideosAlt1Request struct {
    PathParams GetAlbumVideosAlt1PathParams 
    QueryParams GetAlbumVideosAlt1QueryParams 
    
}

type GetAlbumVideosAlt1Response struct {
    ContentType string 
    StatusCode int64 
    LegacyError *shared.LegacyError 
    Videos []shared.Video 
    
}

