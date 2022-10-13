package operations

import (
	"openapi/pkg/models/shared"
)

type UnsubscribeFromChannelPathParams struct {
	ChannelID float64 `pathParam:"style=simple,explode=false,name=channel_id"`
	UserID    float64 `pathParam:"style=simple,explode=false,name=user_id"`
}

type UnsubscribeFromChannelSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type UnsubscribeFromChannelRequest struct {
	PathParams UnsubscribeFromChannelPathParams
	Security   UnsubscribeFromChannelSecurity
}

type UnsubscribeFromChannelResponse struct {
	ContentType string
	StatusCode  int64
	LegacyError *shared.LegacyError
}
