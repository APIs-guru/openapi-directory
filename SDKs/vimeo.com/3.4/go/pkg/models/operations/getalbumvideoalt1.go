package operations

import (
"openapi/pkg/models/shared")

type GetAlbumVideoAlt1PathParams struct {
    AlbumID float64 `pathParam:"style=simple,explode=false,name=album_id"`
    VideoID float64 `pathParam:"style=simple,explode=false,name=video_id"`
    
}

type GetAlbumVideoAlt1QueryParams struct {
    Password *string `queryParam:"style=form,explode=true,name=password"`
    
}

type GetAlbumVideoAlt1Request struct {
    PathParams GetAlbumVideoAlt1PathParams 
    QueryParams GetAlbumVideoAlt1QueryParams 
    
}

type GetAlbumVideoAlt1Response struct {
    ContentType string 
    StatusCode int64 
    LegacyError *shared.LegacyError 
    Video *shared.Video 
    
}

