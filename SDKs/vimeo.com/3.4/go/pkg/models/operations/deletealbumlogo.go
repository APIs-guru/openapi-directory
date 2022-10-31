package operations

import (
"openapi/pkg/models/shared")

type DeleteAlbumLogoPathParams struct {
    AlbumID float64 `pathParam:"style=simple,explode=false,name=album_id"`
    LogoID float64 `pathParam:"style=simple,explode=false,name=logo_id"`
    UserID float64 `pathParam:"style=simple,explode=false,name=user_id"`
    
}

type DeleteAlbumLogoSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type DeleteAlbumLogoRequest struct {
    PathParams DeleteAlbumLogoPathParams 
    Security DeleteAlbumLogoSecurity 
    
}

type DeleteAlbumLogoResponse struct {
    ContentType string 
    StatusCode int64 
    LegacyError *shared.LegacyError 
    
}

