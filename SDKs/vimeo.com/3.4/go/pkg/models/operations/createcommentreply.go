package operations

import (
	"openapi/pkg/models/shared"
)

type CreateCommentReplyPathParams struct {
	CommentID float64 `pathParam:"style=simple,explode=false,name=comment_id"`
	VideoID   float64 `pathParam:"style=simple,explode=false,name=video_id"`
}

type CreateCommentReplyRequestBody struct {
	Text string `json:"text"`
}

type CreateCommentReplySecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type CreateCommentReplyRequest struct {
	PathParams CreateCommentReplyPathParams
	Request    CreateCommentReplyRequestBody `request:"mediaType=application/vnd.vimeo.comment+json"`
	Security   CreateCommentReplySecurity
}

type CreateCommentReplyResponse struct {
	ContentType string
	StatusCode  int64
	Comment     *shared.Comment
	Error       *shared.Error
}
