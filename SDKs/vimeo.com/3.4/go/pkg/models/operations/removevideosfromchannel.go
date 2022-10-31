package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveVideosFromChannelPathParams struct {
	ChannelID float64 `pathParam:"style=simple,explode=false,name=channel_id"`
}

type RemoveVideosFromChannelRequestBody struct {
	VideoURI string `json:"video_uri"`
}

type RemoveVideosFromChannelSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type RemoveVideosFromChannelRequest struct {
	PathParams RemoveVideosFromChannelPathParams
	Request    RemoveVideosFromChannelRequestBody `request:"mediaType=application/json"`
	Security   RemoveVideosFromChannelSecurity
}

type RemoveVideosFromChannelResponse struct {
	ContentType string
	StatusCode  int64
	LegacyError *shared.LegacyError
	Video       *shared.Video
}
