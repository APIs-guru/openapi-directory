package operations

import (
	"openapi/pkg/models/shared"
)

type EditCommentPathParams struct {
	CommentID float64 `pathParam:"style=simple,explode=false,name=comment_id"`
	VideoID   float64 `pathParam:"style=simple,explode=false,name=video_id"`
}

type EditCommentRequestBody struct {
	Text string `json:"text"`
}

type EditCommentSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type EditCommentRequest struct {
	PathParams EditCommentPathParams
	Request    EditCommentRequestBody `request:"mediaType=application/vnd.vimeo.comment+json"`
	Security   EditCommentSecurity
}

type EditCommentResponse struct {
	ContentType string
	StatusCode  int64
	Comment     *shared.Comment
	Error       *shared.Error
}
