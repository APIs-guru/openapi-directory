package operations

import (
	"openapi/pkg/models/shared"
)

type AddVideoToChannelPathParams struct {
	ChannelID float64 `pathParam:"style=simple,explode=false,name=channel_id"`
	VideoID   float64 `pathParam:"style=simple,explode=false,name=video_id"`
}

type AddVideoToChannelSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type AddVideoToChannelRequest struct {
	PathParams AddVideoToChannelPathParams
	Security   AddVideoToChannelSecurity
}

type AddVideoToChannelResponse struct {
	ContentType string
	StatusCode  int64
	LegacyError *shared.LegacyError
}
