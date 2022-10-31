package operations

import (
"openapi/pkg/models/shared")

type DeleteAlbumAlt1PathParams struct {
    AlbumID float64 `pathParam:"style=simple,explode=false,name=album_id"`
    
}

type DeleteAlbumAlt1Security struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type DeleteAlbumAlt1Request struct {
    PathParams DeleteAlbumAlt1PathParams 
    Security DeleteAlbumAlt1Security 
    
}

type DeleteAlbumAlt1Response struct {
    ContentType string 
    StatusCode int64 
    LegacyError *shared.LegacyError 
    
}

