package operations

import (
	"openapi/pkg/models/shared"
)

type AddChannelModeratorsPathParams struct {
	ChannelID float64 `pathParam:"style=simple,explode=false,name=channel_id"`
}

type AddChannelModeratorsRequestBody struct {
	UserURI string `json:"user_uri"`
}

type AddChannelModeratorsSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type AddChannelModeratorsRequest struct {
	PathParams AddChannelModeratorsPathParams
	Request    AddChannelModeratorsRequestBody `request:"mediaType=application/json"`
	Security   AddChannelModeratorsSecurity
}

type AddChannelModeratorsResponse struct {
	ContentType string
	StatusCode  int64
	Error       *shared.Error
	LegacyError *shared.LegacyError
}
