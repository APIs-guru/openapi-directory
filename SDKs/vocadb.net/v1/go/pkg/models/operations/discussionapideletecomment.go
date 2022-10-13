package operations

type DiscussionAPIDeleteCommentPathParams struct {
	CommentID int32 `pathParam:"style=simple,explode=false,name=commentId"`
}

type DiscussionAPIDeleteCommentRequest struct {
	PathParams DiscussionAPIDeleteCommentPathParams
}

type DiscussionAPIDeleteCommentResponse struct {
	ContentType string
	StatusCode  int64
}
