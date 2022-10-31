package operations

import (
"openapi/pkg/models/shared")

type ReplaceVideosInAlbumAlt1PathParams struct {
    AlbumID float64 `pathParam:"style=simple,explode=false,name=album_id"`
    
}

type ReplaceVideosInAlbumAlt1RequestBody struct {
    Videos string `json:"videos"`
    
}

type ReplaceVideosInAlbumAlt1Security struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type ReplaceVideosInAlbumAlt1Request struct {
    PathParams ReplaceVideosInAlbumAlt1PathParams 
    Request ReplaceVideosInAlbumAlt1RequestBody `request:"mediaType=application/json"`
    Security ReplaceVideosInAlbumAlt1Security 
    
}

type ReplaceVideosInAlbumAlt1Response struct {
    ContentType string 
    StatusCode int64 
    LegacyError *shared.LegacyError 
    
}

