package operations

import (
	"openapi/pkg/models/shared"
)

type AddVideosToChannelPathParams struct {
	ChannelID float64 `pathParam:"style=simple,explode=false,name=channel_id"`
}

type AddVideosToChannelRequestBody struct {
	VideoURI string `json:"video_uri"`
}

type AddVideosToChannelSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type AddVideosToChannelRequest struct {
	PathParams AddVideosToChannelPathParams
	Request    AddVideosToChannelRequestBody `request:"mediaType=application/json"`
	Security   AddVideosToChannelSecurity
}

type AddVideosToChannelResponse struct {
	ContentType string
	StatusCode  int64
	LegacyError *shared.LegacyError
}
