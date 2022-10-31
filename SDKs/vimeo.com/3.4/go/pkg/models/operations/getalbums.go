package operations

import (
"openapi/pkg/models/shared")

type GetAlbumsPathParams struct {
    UserID float64 `pathParam:"style=simple,explode=false,name=user_id"`
    
}


type GetAlbumsDirectionEnum string

const (
    GetAlbumsDirectionEnumAsc GetAlbumsDirectionEnum = "asc"
GetAlbumsDirectionEnumDesc GetAlbumsDirectionEnum = "desc"
)



type GetAlbumsSortEnum string

const (
    GetAlbumsSortEnumAlphabetical GetAlbumsSortEnum = "alphabetical"
GetAlbumsSortEnumDate GetAlbumsSortEnum = "date"
GetAlbumsSortEnumDuration GetAlbumsSortEnum = "duration"
GetAlbumsSortEnumVideos GetAlbumsSortEnum = "videos"
)


type GetAlbumsQueryParams struct {
    Direction *GetAlbumsDirectionEnum `queryParam:"style=form,explode=true,name=direction"`
    Page *float64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *float64 `queryParam:"style=form,explode=true,name=per_page"`
    Query *string `queryParam:"style=form,explode=true,name=query"`
    Sort *GetAlbumsSortEnum `queryParam:"style=form,explode=true,name=sort"`
    
}

type GetAlbumsRequest struct {
    PathParams GetAlbumsPathParams 
    QueryParams GetAlbumsQueryParams 
    
}

type GetAlbumsResponse struct {
    ContentType string 
    StatusCode int64 
    Albums []shared.Album 
    LegacyError *shared.LegacyError 
    
}

