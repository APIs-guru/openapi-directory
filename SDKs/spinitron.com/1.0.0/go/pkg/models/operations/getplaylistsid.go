package operations

import (
"openapi/pkg/models/shared")

type GetPlaylistsIDPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetPlaylistsIDQueryParams struct {
    Expand []string `queryParam:"style=form,explode=true,name=expand"`
    Fields []string `queryParam:"style=form,explode=true,name=fields"`
    
}

type GetPlaylistsIDRequest struct {
    PathParams GetPlaylistsIDPathParams 
    QueryParams GetPlaylistsIDQueryParams 
    
}

type GetPlaylistsIDResponse struct {
    Body []byte 
    ContentType string 
    Error *shared.Error 
    Playlist *shared.Playlist 
    StatusCode int64 
    
}

