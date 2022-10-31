package operations

import (
"openapi/pkg/models/shared")

type UserAPIGetAlbumForUserPathParams struct {
    AlbumID int32 `pathParam:"style=simple,explode=false,name=albumId"`
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type UserAPIGetAlbumForUserRequest struct {
    PathParams UserAPIGetAlbumForUserPathParams 
    
}

type UserAPIGetAlbumForUserResponse struct {
    AlbumForUserForAPIContract *shared.AlbumForUserForAPIContract 
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

