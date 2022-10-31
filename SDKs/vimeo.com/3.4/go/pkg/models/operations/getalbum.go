package operations

import (
"openapi/pkg/models/shared")

type GetAlbumPathParams struct {
    AlbumID float64 `pathParam:"style=simple,explode=false,name=album_id"`
    UserID float64 `pathParam:"style=simple,explode=false,name=user_id"`
    
}

type GetAlbumRequest struct {
    PathParams GetAlbumPathParams 
    
}

type GetAlbumResponse struct {
    ContentType string 
    StatusCode int64 
    Album *shared.Album 
    LegacyError *shared.LegacyError 
    
}

