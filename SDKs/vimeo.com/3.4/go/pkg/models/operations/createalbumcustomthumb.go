package operations

import (
"openapi/pkg/models/shared")

type CreateAlbumCustomThumbPathParams struct {
    AlbumID float64 `pathParam:"style=simple,explode=false,name=album_id"`
    UserID float64 `pathParam:"style=simple,explode=false,name=user_id"`
    
}

type CreateAlbumCustomThumbSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type CreateAlbumCustomThumbRequest struct {
    PathParams CreateAlbumCustomThumbPathParams 
    Security CreateAlbumCustomThumbSecurity 
    
}

type CreateAlbumCustomThumbResponse struct {
    ContentType string 
    StatusCode int64 
    LegacyError *shared.LegacyError 
    Picture *shared.Picture 
    
}

