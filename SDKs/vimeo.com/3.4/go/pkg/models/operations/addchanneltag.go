package operations

import (
	"openapi/pkg/models/shared"
)

type AddChannelTagPathParams struct {
	ChannelID float64 `pathParam:"style=simple,explode=false,name=channel_id"`
	Word      string  `pathParam:"style=simple,explode=false,name=word"`
}

type AddChannelTagSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type AddChannelTagRequest struct {
	PathParams AddChannelTagPathParams
	Security   AddChannelTagSecurity
}

type AddChannelTagResponse struct {
	ContentType string
	StatusCode  int64
	Error       *shared.Error
	LegacyError *shared.LegacyError
}
