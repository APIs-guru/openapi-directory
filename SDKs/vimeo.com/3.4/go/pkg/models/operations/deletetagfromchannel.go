package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteTagFromChannelPathParams struct {
	ChannelID float64 `pathParam:"style=simple,explode=false,name=channel_id"`
	Word      string  `pathParam:"style=simple,explode=false,name=word"`
}

type DeleteTagFromChannelSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type DeleteTagFromChannelRequest struct {
	PathParams DeleteTagFromChannelPathParams
	Security   DeleteTagFromChannelSecurity
}

type DeleteTagFromChannelResponse struct {
	ContentType string
	StatusCode  int64
	Error       *shared.Error
	LegacyError *shared.LegacyError
}
