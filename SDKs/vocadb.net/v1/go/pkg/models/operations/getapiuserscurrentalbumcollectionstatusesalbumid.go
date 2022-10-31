package operations

import (
"openapi/pkg/models/shared")

type GetAPIUsersCurrentAlbumCollectionStatusesAlbumIDPathParams struct {
    AlbumID int32 `pathParam:"style=simple,explode=false,name=albumId"`
    
}

type GetAPIUsersCurrentAlbumCollectionStatusesAlbumIDRequest struct {
    PathParams GetAPIUsersCurrentAlbumCollectionStatusesAlbumIDPathParams 
    
}

type GetAPIUsersCurrentAlbumCollectionStatusesAlbumIDResponse struct {
    AlbumForUserForAPIContract *shared.AlbumForUserForAPIContract 
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

