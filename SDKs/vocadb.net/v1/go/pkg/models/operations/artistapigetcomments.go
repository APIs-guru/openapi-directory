package operations

import (
"openapi/pkg/models/shared")

type ArtistAPIGetCommentsPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type ArtistAPIGetCommentsRequest struct {
    PathParams ArtistAPIGetCommentsPathParams 
    
}

type ArtistAPIGetCommentsResponse struct {
    Body []byte 
    CommentForAPIContracts []shared.CommentForAPIContract 
    ContentType string 
    StatusCode int64 
    
}

