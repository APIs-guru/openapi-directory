package operations

type UserAPIDeleteProfileCommentPathParams struct {
	CommentID int32 `pathParam:"style=simple,explode=false,name=commentId"`
}

type UserAPIDeleteProfileCommentRequest struct {
	PathParams UserAPIDeleteProfileCommentPathParams
}

type UserAPIDeleteProfileCommentResponse struct {
	ContentType string
	StatusCode  int64
}
