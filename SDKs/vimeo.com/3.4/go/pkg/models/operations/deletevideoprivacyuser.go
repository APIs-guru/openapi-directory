package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteVideoPrivacyUserPathParams struct {
	UserID  float64 `pathParam:"style=simple,explode=false,name=user_id"`
	VideoID float64 `pathParam:"style=simple,explode=false,name=video_id"`
}

type DeleteVideoPrivacyUserSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type DeleteVideoPrivacyUserRequest struct {
	PathParams DeleteVideoPrivacyUserPathParams
	Security   DeleteVideoPrivacyUserSecurity
}

type DeleteVideoPrivacyUserResponse struct {
	ContentType string
	StatusCode  int64
	LegacyError *shared.LegacyError
}
