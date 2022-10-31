package operations



type TagAPIDeleteCommentPathParams struct {
    CommentID int32 `pathParam:"style=simple,explode=false,name=commentId"`
    
}

type TagAPIDeleteCommentRequest struct {
    PathParams TagAPIDeleteCommentPathParams 
    
}

type TagAPIDeleteCommentResponse struct {
    ContentType string 
    StatusCode int64 
    
}

