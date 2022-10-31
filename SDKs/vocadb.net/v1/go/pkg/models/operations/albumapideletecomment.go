package operations



type AlbumAPIDeleteCommentPathParams struct {
    CommentID int32 `pathParam:"style=simple,explode=false,name=commentId"`
    
}

type AlbumAPIDeleteCommentRequest struct {
    PathParams AlbumAPIDeleteCommentPathParams 
    
}

type AlbumAPIDeleteCommentResponse struct {
    ContentType string 
    StatusCode int64 
    
}

