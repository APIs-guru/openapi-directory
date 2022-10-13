package operations

import (
	"openapi/pkg/models/shared"
)

type AddChannelModeratorPathParams struct {
	ChannelID float64 `pathParam:"style=simple,explode=false,name=channel_id"`
	UserID    float64 `pathParam:"style=simple,explode=false,name=user_id"`
}

type AddChannelModeratorSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type AddChannelModeratorRequest struct {
	PathParams AddChannelModeratorPathParams
	Security   AddChannelModeratorSecurity
}

type AddChannelModeratorResponse struct {
	ContentType string
	StatusCode  int64
	LegacyError *shared.LegacyError
}
