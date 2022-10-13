package operations

import (
	"openapi/pkg/models/shared"
)

type SetChannelPrivacyUserPathParams struct {
	ChannelID float64 `pathParam:"style=simple,explode=false,name=channel_id"`
	UserID    float64 `pathParam:"style=simple,explode=false,name=user_id"`
}

type SetChannelPrivacyUserSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type SetChannelPrivacyUserRequest struct {
	PathParams SetChannelPrivacyUserPathParams
	Security   SetChannelPrivacyUserSecurity
}

type SetChannelPrivacyUserResponse struct {
	ContentType string
	StatusCode  int64
	Error       *shared.Error
}
