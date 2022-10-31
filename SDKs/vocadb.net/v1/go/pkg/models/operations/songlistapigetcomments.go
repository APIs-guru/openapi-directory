package operations

import (
"openapi/pkg/models/shared")

type SongListAPIGetCommentsPathParams struct {
    ListID int32 `pathParam:"style=simple,explode=false,name=listId"`
    
}

type SongListAPIGetCommentsRequest struct {
    PathParams SongListAPIGetCommentsPathParams 
    
}

type SongListAPIGetCommentsResponse struct {
    Body []byte 
    ContentType string 
    PartialFindResultCommentForAPIContract *shared.PartialFindResultCommentForAPIContract 
    StatusCode int64 
    
}

