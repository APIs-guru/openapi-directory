package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteChannelPathParams struct {
	ChannelID float64 `pathParam:"style=simple,explode=false,name=channel_id"`
}

type DeleteChannelSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type DeleteChannelRequest struct {
	PathParams DeleteChannelPathParams
	Security   DeleteChannelSecurity
}

type DeleteChannelResponse struct {
	ContentType string
	StatusCode  int64
	LegacyError *shared.LegacyError
}
