package operations

import (
"openapi/pkg/models/shared")

type AddVideoToAlbumPathParams struct {
    AlbumID float64 `pathParam:"style=simple,explode=false,name=album_id"`
    UserID float64 `pathParam:"style=simple,explode=false,name=user_id"`
    VideoID float64 `pathParam:"style=simple,explode=false,name=video_id"`
    
}

type AddVideoToAlbumSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type AddVideoToAlbumRequest struct {
    PathParams AddVideoToAlbumPathParams 
    Security AddVideoToAlbumSecurity 
    
}

type AddVideoToAlbumResponse struct {
    ContentType string 
    StatusCode int64 
    LegacyError *shared.LegacyError 
    
}

