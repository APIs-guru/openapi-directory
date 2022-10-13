package operations

import (
	"openapi/pkg/models/shared"
)

type CategorizeChannelPathParams struct {
	Category  string  `pathParam:"style=simple,explode=false,name=category"`
	ChannelID float64 `pathParam:"style=simple,explode=false,name=channel_id"`
}

type CategorizeChannelSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type CategorizeChannelRequest struct {
	PathParams CategorizeChannelPathParams
	Security   CategorizeChannelSecurity
}

type CategorizeChannelResponse struct {
	ContentType string
	StatusCode  int64
	Error       *shared.Error
	LegacyError *shared.LegacyError
}
