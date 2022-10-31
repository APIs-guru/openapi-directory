package operations



type ArtistAPIDeleteCommentPathParams struct {
    CommentID int32 `pathParam:"style=simple,explode=false,name=commentId"`
    
}

type ArtistAPIDeleteCommentRequest struct {
    PathParams ArtistAPIDeleteCommentPathParams 
    
}

type ArtistAPIDeleteCommentResponse struct {
    ContentType string 
    StatusCode int64 
    
}

