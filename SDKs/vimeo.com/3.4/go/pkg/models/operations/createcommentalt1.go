package operations

import (
	"openapi/pkg/models/shared"
)

type CreateCommentAlt1PathParams struct {
	ChannelID float64 `pathParam:"style=simple,explode=false,name=channel_id"`
	VideoID   float64 `pathParam:"style=simple,explode=false,name=video_id"`
}

type CreateCommentAlt1RequestBody struct {
	Text string `json:"text"`
}

type CreateCommentAlt1Security struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type CreateCommentAlt1Request struct {
	PathParams CreateCommentAlt1PathParams
	Request    CreateCommentAlt1RequestBody `request:"mediaType=application/vnd.vimeo.comment+json"`
	Security   CreateCommentAlt1Security
}

type CreateCommentAlt1Response struct {
	ContentType string
	StatusCode  int64
	Comment     *shared.Comment
	Error       *shared.Error
}
