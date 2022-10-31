package operations

import (
"openapi/pkg/models/shared")

type GetCommentRepliesPathParams struct {
    CommentID float64 `pathParam:"style=simple,explode=false,name=comment_id"`
    VideoID float64 `pathParam:"style=simple,explode=false,name=video_id"`
    
}

type GetCommentRepliesQueryParams struct {
    Page *float64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *float64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type GetCommentRepliesRequest struct {
    PathParams GetCommentRepliesPathParams 
    QueryParams GetCommentRepliesQueryParams 
    
}

type GetCommentRepliesResponse struct {
    ContentType string 
    StatusCode int64 
    Comments []shared.Comment 
    LegacyError *shared.LegacyError 
    
}

