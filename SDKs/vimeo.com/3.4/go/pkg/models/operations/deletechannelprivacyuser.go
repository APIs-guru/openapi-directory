package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteChannelPrivacyUserPathParams struct {
	ChannelID float64 `pathParam:"style=simple,explode=false,name=channel_id"`
	UserID    float64 `pathParam:"style=simple,explode=false,name=user_id"`
}

type DeleteChannelPrivacyUserSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type DeleteChannelPrivacyUserRequest struct {
	PathParams DeleteChannelPrivacyUserPathParams
	Security   DeleteChannelPrivacyUserSecurity
}

type DeleteChannelPrivacyUserResponse struct {
	ContentType string
	StatusCode  int64
	Error       *shared.Error
}
