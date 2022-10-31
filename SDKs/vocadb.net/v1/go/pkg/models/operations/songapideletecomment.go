package operations

type SongAPIDeleteCommentPathParams struct {
	CommentID int32 `pathParam:"style=simple,explode=false,name=commentId"`
}

type SongAPIDeleteCommentRequest struct {
	PathParams SongAPIDeleteCommentPathParams
}

type SongAPIDeleteCommentResponse struct {
	ContentType string
	StatusCode  int64
}
