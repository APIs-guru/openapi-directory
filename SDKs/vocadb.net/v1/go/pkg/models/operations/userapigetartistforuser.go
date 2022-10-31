package operations

import (
"openapi/pkg/models/shared")

type UserAPIGetArtistForUserPathParams struct {
    ArtistID int32 `pathParam:"style=simple,explode=false,name=artistId"`
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type UserAPIGetArtistForUserRequest struct {
    PathParams UserAPIGetArtistForUserPathParams 
    
}

type UserAPIGetArtistForUserResponse struct {
    ArtistForUserForAPIContract *shared.ArtistForUserForAPIContract 
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

