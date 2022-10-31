package operations

import (
"openapi/pkg/models/shared")

type GetAPIUsersCurrentFollowedArtistsArtistIDPathParams struct {
    ArtistID int32 `pathParam:"style=simple,explode=false,name=artistId"`
    
}

type GetAPIUsersCurrentFollowedArtistsArtistIDRequest struct {
    PathParams GetAPIUsersCurrentFollowedArtistsArtistIDPathParams 
    
}

type GetAPIUsersCurrentFollowedArtistsArtistIDResponse struct {
    ArtistForUserForAPIContract *shared.ArtistForUserForAPIContract 
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

