package operations

import (
	"openapi/pkg/models/shared"
)

type GetCommentPathParams struct {
	CommentID float64 `pathParam:"style=simple,explode=false,name=comment_id"`
	VideoID   float64 `pathParam:"style=simple,explode=false,name=video_id"`
}

type GetCommentRequest struct {
	PathParams GetCommentPathParams
}

type GetCommentResponse struct {
	ContentType string
	StatusCode  int64
	Comment     *shared.Comment
	LegacyError *shared.LegacyError
}
