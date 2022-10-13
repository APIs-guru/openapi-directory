package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteVideoFromChannelPathParams struct {
	ChannelID float64 `pathParam:"style=simple,explode=false,name=channel_id"`
	VideoID   float64 `pathParam:"style=simple,explode=false,name=video_id"`
}

type DeleteVideoFromChannelSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type DeleteVideoFromChannelRequest struct {
	PathParams DeleteVideoFromChannelPathParams
	Security   DeleteVideoFromChannelSecurity
}

type DeleteVideoFromChannelResponse struct {
	ContentType string
	StatusCode  int64
	LegacyError *shared.LegacyError
}
