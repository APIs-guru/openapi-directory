package operations

import (
"openapi/pkg/models/shared")

type GetAlbumCustomThumbnailPathParams struct {
    AlbumID float64 `pathParam:"style=simple,explode=false,name=album_id"`
    ThumbnailID float64 `pathParam:"style=simple,explode=false,name=thumbnail_id"`
    UserID float64 `pathParam:"style=simple,explode=false,name=user_id"`
    
}

type GetAlbumCustomThumbnailRequest struct {
    PathParams GetAlbumCustomThumbnailPathParams 
    
}

type GetAlbumCustomThumbnailResponse struct {
    ContentType string 
    StatusCode int64 
    LegacyError *shared.LegacyError 
    Picture *shared.Picture 
    
}

