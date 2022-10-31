package operations

import (
"openapi/pkg/models/shared")

type GetAlbumAlt1PathParams struct {
    AlbumID float64 `pathParam:"style=simple,explode=false,name=album_id"`
    
}

type GetAlbumAlt1Request struct {
    PathParams GetAlbumAlt1PathParams 
    
}

type GetAlbumAlt1Response struct {
    ContentType string 
    StatusCode int64 
    Album *shared.Album 
    LegacyError *shared.LegacyError 
    
}

