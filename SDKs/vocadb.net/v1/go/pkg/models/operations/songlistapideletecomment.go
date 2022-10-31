package operations



type SongListAPIDeleteCommentPathParams struct {
    CommentID int32 `pathParam:"style=simple,explode=false,name=commentId"`
    
}

type SongListAPIDeleteCommentRequest struct {
    PathParams SongListAPIDeleteCommentPathParams 
    
}

type SongListAPIDeleteCommentResponse struct {
    ContentType string 
    StatusCode int64 
    
}

