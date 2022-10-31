package operations

import (
"openapi/pkg/models/shared")

type TagAPIGetCommentsPathParams struct {
    TagID int32 `pathParam:"style=simple,explode=false,name=tagId"`
    
}

type TagAPIGetCommentsRequest struct {
    PathParams TagAPIGetCommentsPathParams 
    
}

type TagAPIGetCommentsResponse struct {
    Body []byte 
    ContentType string 
    PartialFindResultCommentForAPIContract *shared.PartialFindResultCommentForAPIContract 
    StatusCode int64 
    
}

